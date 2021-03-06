export type registrationACType = ReturnType<typeof registrationAC>;
export type isErrorRegistrationACType = ReturnType<typeof setErrorRegistrationMessage>;
export type setMessageRestorePasswordType = ReturnType<typeof setMessageRestorePassword>;
export type isCreateNewPasswordType = ReturnType<typeof isCreateNewPassword>;
export type ErrorCreateNewPasswordType = ReturnType<typeof ErrorCreateNewPassword>;
export type SetInitializeACType = ReturnType<typeof setInitializeAC>;
export type isLearnCardType = ReturnType<typeof isLearnCard>;

export type AppActionType =
  | isLearnCardType
  | registrationACType
  | isErrorRegistrationACType
  | setMessageRestorePasswordType
  | isCreateNewPasswordType
  | SetInitializeACType
  | ErrorCreateNewPasswordType;

export const isLearnCard = (id: string) =>
  ({
    type: 'IS-LEARN-CARD',
    id,
  } as const);
export const registrationAC = (isRegistration: boolean) =>
  ({
    type: 'IS-REGISTRATION',
    isRegistration,
  } as const);

export const setErrorRegistrationMessage = (errorRegistration: string) =>
  ({
    type: 'IS-ERROR-REGISTRATION-MESSAGE',
    errorRegistration,
  } as const);

export const setMessageRestorePassword = (messageRestorePassword: string) =>
  ({
    type: 'IS-ERROR-REGISTRATION',
    messageRestorePassword,
  } as const);
export const setInitializeAC = (isInitialized: boolean) =>
  ({
    type: 'IS-INITIALIZATION',
    isInitialized,
  } as const);

export const isCreateNewPassword = (isCreatePassword: boolean) =>
  ({
    type: 'IS-CREATE-NEW-PASSWORD',
    isCreatePassword,
  } as const);
export const ErrorCreateNewPassword = (errorCreatePassword: string) =>
  ({
    type: 'ERROR-CREATE-NEW-PASSWORD',
    errorCreatePassword,
  } as const);
