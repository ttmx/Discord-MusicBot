export interface IKeyProps {
    children?: React.ReactNode;
}

export interface IShortcutEntryProps {
    description?: React.ReactNode;
    comb?: IKeyProps['children'][];
}
