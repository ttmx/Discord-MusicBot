import { IKeyProps } from '@/interfaces/components/Shortcuts';

export default function Key({ children }: IKeyProps) {
    return (
        <span
            style={{
                border: '1px solid white',
                borderRadius: '6px',
                padding: '2px 10px',
                margin: '4px',
            }}
        >
            {children}
        </span>
    );
}
