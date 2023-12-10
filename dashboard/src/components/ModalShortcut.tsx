import Modal from '@/components/Modal';
import { IModalShortcutProps } from '@/interfaces/components/Modal';
import { Container } from '@nextui-org/react';

export default function ModalShortcut({
    open,
    modalContainerProps = {},
}: IModalShortcutProps) {
    return (
        <Modal open={open} {...modalContainerProps}>
            <Container
                css={{
                    borderRadius: '6px',
                    backgroundColor: '$gray50',
                }}
                fluid
            >
                <div
                    style={{
                        padding: '20px',
                    }}
                >
                    <h1>Title</h1>
                </div>
                <div
                    style={{
                        padding: '20px',
                    }}
                >
                    <h2>Description</h2>
                </div>
            </Container>
        </Modal>
    );
}
