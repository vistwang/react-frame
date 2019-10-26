// 一般会将常用的结构类型存放到 /types 目录下
export interface StoreState {
    count: number;
    // tslint:disable-next-line:array-type
    todo: Array<any>;
};

export const initStoreState: StoreState = {
    count: 0,
    todo: []
}
