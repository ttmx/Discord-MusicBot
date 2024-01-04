export interface IKbdsrct {
    comb: string[];
    cb: () => void;
    category?: string;
    description?: string;
    hide?: boolean;
    combDisplay?: string[];
}

export interface IShorcutGroup {
    category: string;
    shorcuts: IKbdsrct[];
}
