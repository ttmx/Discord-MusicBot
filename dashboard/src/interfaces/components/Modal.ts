export interface IModalProps {
    children?: React.ReactNode;
    fullHeight?: boolean;
    open?: boolean;
}

export interface IModalShortcutProps {
    open?: IModalProps['open'];
    modalContainerProps?: IModalProps;
}
