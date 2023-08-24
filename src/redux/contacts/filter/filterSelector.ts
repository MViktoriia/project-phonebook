import { RootState } from "redux/store";

export const getFilter = (store: RootState) => {
    return store.filter;
};