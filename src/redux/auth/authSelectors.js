export const getisLoggedInStatus = ({auth}) => auth.isLoggedIn;
export const getUser = ({auth}) => auth.user;
export const getLoadingUserStatus = ({auth}) => auth.isLoadingUser;