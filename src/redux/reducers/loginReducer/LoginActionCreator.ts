type SetIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>;
type LogOutACType = ReturnType<typeof logOutAC>;
type SetErrorLoginACType = ReturnType<typeof setErrorLoginAC>;
export type LoginActionType = SetErrorLoginACType | LogOutACType | SetIsLoggedInACType;

export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'login/SET-IS-LOGGED-IN', value } as const);

export const logOutAC = (value: boolean) => ({ type: 'LOG-OUT', value } as const);

export const setErrorLoginAC = (error: string) =>
  ({ type: 'login/SET-ERROR-LOGIN', error } as const);
