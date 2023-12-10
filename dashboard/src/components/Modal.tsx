import { IModalProps } from '@/interfaces/components/Modal';

const containerStyle: React.HTMLAttributes<HTMLDivElement>['style'] = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 500,
};

export default function Modal({ children, fullHeight, open }: IModalProps) {
    if (!open) return null;

    const cpyStyles = { ...containerStyle };

    if (!fullHeight) cpyStyles.alignItems = 'center';

    return <div style={cpyStyles}>{children}</div>;
}
