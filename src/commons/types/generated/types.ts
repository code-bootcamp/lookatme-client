export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IBoard = {
  __typename?: 'Board';
  contents: Scalars['String'];
  id: Scalars['String'];
  isMaker: Scalars['Boolean'];
  like: Scalars['Int'];
  moods: Array<IMood>;
  season: Scalars['String'];
  tags: Array<ITag>;
  user: IUser;
  users: Array<IUser>;
};

export type ICreateUserInput = {
  admin?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  gender: Scalars['String'];
  height: Scalars['Int'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
};

export enum IGenderDefault {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type IMood = {
  __typename?: 'Mood';
  boards: Array<IBoard>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createUser: IUser;
  deleteLoginUser: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreUser: Scalars['Boolean'];
  updateUser: IUser;
  updateUserPwd: IUser;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRestoreUserArgs = {
  userId: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
  userId: Scalars['String'];
};


export type IMutationUpdateUserPwdArgs = {
  newPassword: Scalars['String'];
};

export type IProduct = {
  __typename?: 'Product';
  board: IBoard;
  description: Scalars['String'];
  id: Scalars['String'];
  img_url: Scalars['String'];
  isSoldout: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Int'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchLoginUser: IUser;
  fetchUser: IUser;
  fetchUsers: Array<IUser>;
  fetchUsersWithDeleted: Array<IUser>;
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};

export type ITag = {
  __typename?: 'Tag';
  boards: Array<IBoard>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type IUpdateUserInput = {
  admin?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  admin: Scalars['Boolean'];
  email: Scalars['String'];
  gender: IGenderDefault;
  height: Scalars['Int'];
  id: Scalars['String'];
  nickname: Scalars['String'];
  phone_number: Scalars['String'];
  point: Scalars['Int'];
  savedBoards: Array<IBoard>;
};
