export interface IKeyProps {
    children?: React.ReactNode;
}

export interface IShortcutEntryProps {
    name?: React.ReactNode;
    comb?: IKeyProps['children'][];
}
