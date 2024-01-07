import ModalShortcut from '@/components/ModalShortcut';
import { PageLayout } from '@/interfaces/layouts';
import {
    execKbdsrct,
    registerKbdsrct,
    unregisterKbdsrct,
} from '@/libs/kbdsrct';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';

const AppLayout: PageLayout = ({
    children,
    contentContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100vw',
        maxHeight: '100vh',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
}) => {
    const [modalShortcutOpen, setModalShortcutOpen] = useState(false);

    const pressesRef = useRef<string[]>([]);

    const removePresses = (key: string) => {
        const rmIdx = pressesRef.current.findIndex((v) => key === v);
        if (rmIdx < 0) return false;

        pressesRef.current.splice(rmIdx, 1);
        return true;
    };

    /**
     * Modifier detection may not work depends on user's keyboard configuration, there's at least
     * OS level and app level capture, each that can block browser javascript from getting any key press event
     * or preventing some modifier to give its current actual state (mostly Alt key for me)
     *
     * The browser might not even fire keyboard event cuz it's already captured by the OS or other app
     */
    const kbdsrctInHandler = (e: KeyboardEvent) => {
        if (e.shiftKey) {
            pressesRef.current.push('Shift');
        }

        if (e.ctrlKey) {
            pressesRef.current.push('Control');
        }

        if (e.altKey) {
            pressesRef.current.push('Alt');
        }

        pressesRef.current.push(e.key);

        if (execKbdsrct(pressesRef.current)) e.preventDefault();
    };

    const kbdsrctOutHandler = (e: KeyboardEvent) => {
        if (removePresses(e.key)) {
            e.preventDefault();
        }

        // remove modifier keys too
        if (e.shiftKey) {
            removePresses('Shift');
        }

        if (e.ctrlKey) {
            removePresses('Control');
        }

        if (e.altKey) {
            removePresses('Alt');
        }
    };

    const modalShortcutKbdsrct = {
        comb: ['Control', '/'],
        cb: () => setModalShortcutOpen((v) => !v),
        hide: true as const,
    };

    useEffect(() => {
        document.body.addEventListener('keydown', kbdsrctInHandler);
        document.body.addEventListener('keyup', kbdsrctOutHandler);

        registerKbdsrct(modalShortcutKbdsrct);

        return () => {
            document.body.removeEventListener('keydown', kbdsrctInHandler);
            document.body.removeEventListener('keyup', kbdsrctOutHandler);

            unregisterKbdsrct(modalShortcutKbdsrct);
        };
    }, []);

    return (
        <NextUIProvider
            theme={createTheme({
                type: 'dark',
                theme: {
                    colors: {
                        serverCardGray: '#C3C3C5',
                        gray4: '#E2DEE9',
                    },
                },
            })}
        >
            <div style={contentContainerStyle}>{children}</div>
            <ModalShortcut
                open={modalShortcutOpen}
                onClose={() => modalShortcutOpen && setModalShortcutOpen(false)}
            />
        </NextUIProvider>
    );
};

export default AppLayout;
