export type AuthResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error?: string;
};

export type RegistrationResponseType = {
  addedUser?: {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error?: string;
    __v: number;
  };
  email?: string;
  error?: string;
};

export type AuthRequestType = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type ProfileInfoType = {
  name: string;
  avatar?: string;
};

export type ErrorType = {
  response: {
    data: {
      error: string;
      email?: string;
      in?: string;
    };
  };
};

export type RestorePasswordType = {
  email: string;
  from: string;
  message: string;
};

export type ResponseRestorePasswordType = {
  answer: boolean;
  html: boolean;
  info: string;
  success: boolean;
};

export type CreateNewPassword = {
  password: string;
  resetPasswordToken?: string;
};

export type CreateNewPasswordResponse = {
  data: {
    info: string;
  };
};

//= =================================== PacksList ============================================ //

export type ResponseGetPacksList = {
  cardPacks: GetPacksListCard[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: number;
  max: number;
  min: number;
  sortPacks: string;
};

export type GetPacksListCard = {
  _id: string;
  user_id: string;
  user_name: string;
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
};

export type ResponseMe = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error?: string;
};
