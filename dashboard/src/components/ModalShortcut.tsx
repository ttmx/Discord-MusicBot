import Modal from '@/components/Modal';
import { IModalShortcutProps } from '@/interfaces/components/Modal';
import { Container } from '@nextui-org/react';
import ModalCloseIcon from '@/assets/icons/modal-close.svg';
import Key from '@/components/shortcuts/Key';
import ShortcutEntry from './shortcuts/ShortcutEntry';

export default function ModalShortcut({
    open,
    onClose,
    modalContainerProps = {},
}: IModalShortcutProps) {
    return (
        <Modal open={open} {...modalContainerProps}>
            <Container
                css={{
                    borderRadius: '6px',
                    backgroundColor: '$gray50',
                    padding: 0,
                    maxWidth: 600,
                    boxShadow: '0px 0px 300px 0px rgba(255,255,255,0.1)',
                }}
                fluid
                responsive={false}
            >
                <Container
                    css={{
                        padding: '20px',
                        borderBottom: '1px solid $primary',
                        justifyContent: 'center',
                    }}
                    fluid
                    responsive={false}
                >
                    <div
                        style={{
                            position: 'relative',
                        }}
                    >
                        <h2>Keyboard Shortcuts</h2>

                        <ModalCloseIcon
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                cursor: 'pointer',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            fontSize: 18,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        Press <Key>Ctrl</Key>
                        <Key>/</Key> to toggle this modal.
                    </div>
                </Container>

                <div
                    style={{
                        padding: '20px',
                        overflow: 'auto',
                        fontSize: 18,
                    }}
                >
                    <div>
                        <h2>Playback</h2>
                        <ShortcutEntry name="Play / Pause" comb={['Space']} />
                        <ShortcutEntry name="Next Track" comb={['Alt', '→']} />
                        <ShortcutEntry
                            name="Previous Track"
                            comb={['Alt', '←']}
                        />
                    </div>
                </div>
            </Container>
        </Modal>
    );
}
