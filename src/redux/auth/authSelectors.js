export const getIsAuthenticated = state => state.auth.isAuth;
export const getUsername = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;

// eslint-disable-next-line import/no-anonymous-default-export
export default { getIsAuthenticated, getUsername, getUserEmail };
