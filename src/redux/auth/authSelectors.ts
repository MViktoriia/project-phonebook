import { RootState } from "redux/store";

export const getisLoggedInStatus = ({auth}: RootState) => auth.isLoggedIn;
export const getUser = ({auth}: RootState) => auth.user;
export const getLoadingUserStatus = ({auth}: RootState) => auth.isLoadingUser;