export type AuthResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: string;
  updated: string;
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
export type StatusLoadingType = 'loading' | 'succeeded';
export type SortPacksType =
  | '0name'
  | '1name'
  | '0cardsCount'
  | '1cardsCount'
  | '0updated'
  | '1updated'
  | '0created'
  | '1created';

export type ResponseGetPacksList = {
  cardPacks: GetPacksListCard[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: number;
  maxCount: number;
  minCount: number;
  sortPacks: SortPacksType;
  statusLoading?: string | StatusLoadingType;
  packName?: string;
  user_id?: string;
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

export type ResponseAddAndDeletePacksListType = {
  cardsCount: number;
  created: string;
  grade: number;
  more_id: string;
  name: string;
  path: string;
  private: false;
  rating: number;
  shots: number;
  type: string;
  updated: string;
  user_id: string;
  user_name: string;
  __v: number;
  _id: string;
  token: string;
  tokenDeathTime: number;
};
export type UpdatedGrade = {
  updatedGrade: {
    card_id: string;
    cardsPack_id: string;
    created: string;
    grade: number;
    more_id: string;
    shots: number;
    updated: string;
    user_id: string;
    __v: number;
    _id: string;
  };
};
