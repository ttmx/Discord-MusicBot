interface IBaseKbdsrct {
    comb: string[];
    cb: () => void;
    description?: string;
    combDisplay?: string[];
}

export interface IDefaultKbdsrct extends IBaseKbdsrct {
    category: string;
    hide?: false;
}

export interface IHiddenKbdsrct extends IBaseKbdsrct {
    category?: string;
    hide: true;
}

export type IKbdsrct = IDefaultKbdsrct | IHiddenKbdsrct;

export interface IShorcutGroup {
    category: string;
    shorcuts: IKbdsrct[];
}
