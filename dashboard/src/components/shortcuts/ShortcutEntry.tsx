import { IShortcutEntryProps } from '@/interfaces/components/Shortcuts';
import Key from '@/components/shortcuts/Key';

export default function ShortcutEntry({
    description,
    comb = [],
}: IShortcutEntryProps) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div>{description}</div>
            <div
                style={{
                    display: 'flex',
                }}
            >
                {comb?.map((v, i) => <Key key={i}>{v}</Key>)}
            </div>
        </div>
    );
}
