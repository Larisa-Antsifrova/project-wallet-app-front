export const getIsAuthenticated = state => state.auth.token;
export const getUserName = state =>
  state.auth.user.name === undefined
    ? state.auth.user.data.name
    : state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getIsError = state => state.auth.error;
