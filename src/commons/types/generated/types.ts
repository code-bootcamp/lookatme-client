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
  DateTime: any;
  Upload: any;
};

export enum IAuthor {
  Specialist = 'SPECIALIST',
  User = 'USER'
}

export type IAdmin = {
  __typename?: 'Admin';
  email: Scalars['String'];
  id: Scalars['String'];
  nickname: Scalars['String'];
};

export type ICategory = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
  story: IStory;
};

export type IChatList = {
  __typename?: 'ChatList';
  author: IAuthor;
  createdAt: Scalars['DateTime'];
  message: Scalars['String'];
  nickname: Scalars['String'];
};

export type IChatMessage = {
  __typename?: 'ChatMessage';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  ticket: ITicket;
  user: IUser;
};

export type IComment = {
  __typename?: 'Comment';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isReported: Scalars['Boolean'];
  likedUsers: Array<IUser>;
  likes: Scalars['Int'];
  story: IStory;
  text: Scalars['String'];
  underComments: Array<IUnderComment>;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICreateAdminInput = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type ICreateCommentInput = {
  storyId: Scalars['String'];
  text: Scalars['String'];
};

export type ICreateQuoteInput = {
  author: Scalars['String'];
  message: Scalars['String'];
};

export type ICreateSpecialistCommentInput = {
  storyId: Scalars['String'];
  text: Scalars['String'];
};

export type ICreateSpecialistInput = {
  account: Scalars['String'];
  career: Scalars['String'];
  imgUrl: Scalars['String'];
  introduction: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  price: Scalars['Int'];
  summary: Scalars['String'];
};

export type ICreateSpecialistReviewInput = {
  rate: Scalars['Float'];
  specialistId: Scalars['String'];
  text: Scalars['String'];
};

export type ICreateStoryInput = {
  categoryName: Scalars['String'];
  imgUrl?: InputMaybe<Array<Scalars['String']>>;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateUnderCommentInput = {
  commentId: Scalars['String'];
  contents: Scalars['String'];
};

export type ICreateUnderSpecialistCommentInput = {
  contents: Scalars['String'];
  specialistCommentId: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  /** ????????? ????????? */
  adminLogin: Scalars['String'];
  /** ?????? ???????????? */
  cancelPayment: IPayment;
  /** ?????? ?????? */
  checkToken: Scalars['Boolean'];
  /** ????????? ?????? ?????? */
  completeTicket: ITicket;
  /** ????????? ???????????? */
  createAdmin: IAdmin;
  /** ?????? ?????? */
  createComment: IComment;
  /** ?????? ???????????? */
  createPayment: IPayment;
  /** ?????? ?????? */
  createQuote: IQuote;
  /** ????????? ?????? ?????? ?????? */
  createQuoteList: Array<IQuote>;
  /** ????????? ?????? */
  createSpecialist: ISpecialist;
  /** ????????? ?????? ?????? */
  createSpecialistComment: ISpecialistComment;
  /** ????????? ?????? ?????? */
  createSpecialistReview: ISpecialistReview;
  /** ?????? ?????? */
  createStory: IStory;
  /** ????????? ID??? ?????? ?????? */
  createTicket: ITicket;
  /** ????????? ?????? */
  createUnderComment: IUnderComment;
  /** ????????? ?????? ????????? ?????? */
  createUnderSpecialistComment: IUnderSpecialistComment;
  /** ?????? ?????? ??? ?????? ????????? ?????? */
  createUser: IUser;
  /** ???????????? ?????? ?????? */
  deleteLoginUser: Scalars['Boolean'];
  /** ?????? ?????? ?????? */
  deleteOwnComment: Scalars['Boolean'];
  /** ????????? ????????? ?????? ?????? */
  deleteOwnStory: Scalars['Boolean'];
  /** ????????? ????????? ?????? */
  deleteOwnUnderComment: Scalars['Boolean'];
  /** ?????? ?????? */
  deleteQuote: Scalars['Boolean'];
  /** ?????? ?????? ?????? */
  deleteReportedComment: Scalars['Boolean'];
  /** ?????? ????????? ?????? ?????? */
  deleteReportedSpecialistComment: Scalars['Boolean'];
  /** ?????? ?????? ?????? */
  deleteReportedStory: Scalars['Boolean'];
  /** ?????? ????????? ?????? */
  deleteReportedUnderComment: Scalars['Boolean'];
  /** ????????? ????????? ?????? ?????? */
  deleteSpecialistOwnComment: Scalars['Boolean'];
  /** ????????? ?????? ?????? ?????? */
  deleteUnderSpecialistComment: Scalars['Boolean'];
  /** ????????? ???????????? ?????? ?????? */
  deleteUser: Scalars['Boolean'];
  /** ?????? ????????? / ????????? ?????? */
  likeComment: IComment;
  /** ?????? ????????? / ????????? ?????? API */
  likeStory: IStory;
  /** ????????? */
  login: Scalars['String'];
  /** ???????????? */
  logout: Scalars['String'];
  /** ?????? ?????? */
  reportComment: Scalars['Boolean'];
  /** ????????? ?????? ?????? */
  reportSpecialistComment: Scalars['Boolean'];
  /** ?????? ?????? */
  reportStory: Scalars['Boolean'];
  /** ????????? ?????? */
  reportUnderComment: Scalars['Boolean'];
  /** ????????? ?????? ????????? */
  restoreAccessToken: Scalars['String'];
  /** ?????? ????????? */
  sendTokenToSMS: Scalars['String'];
  /** ????????? ????????? */
  specialistLogin: Scalars['String'];
  /** ?????? ?????? */
  updateComment: IComment;
  /** ????????? ????????? ?????? */
  updateOwnUnderComment: IUnderComment;
  /** ?????? ?????? */
  updateQuote: IQuote;
  /** ????????? ????????? ?????? ?????? */
  updateSpecialistOwnComment: ISpecialistComment;
  /** ????????? ????????? ?????? ?????? */
  updateSpecialistOwnProfile: ISpecialist;
  /** ?????? ?????? */
  updateStory: IStory;
  /** ????????? ?????? ?????? ?????? */
  updateUnderSpecialistComment: IUnderSpecialistComment;
  /** ???????????? ?????? ?????? ?????? */
  updateUser: IUser;
  /** ?????? ????????? ?????? */
  updateUserPoint: IUser;
  /** ???????????? ?????? ???????????? ?????? */
  updateUserPwd: IUser;
  /** ???????????? ?????? ???????????? ?????? */
  updateUserPwdWithEmail: IUser;
  /** ????????? ???????????? ???????????? ?????? */
  updateUserWithAdminAccess: IUser;
  /** ????????? ????????? API */
  uploadFile: Scalars['String'];
};


export type IMutationAdminLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationCancelPaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
  reason: Scalars['String'];
};


export type IMutationCheckTokenArgs = {
  phoneNumber: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCompleteTicketArgs = {
  ticketId: Scalars['String'];
};


export type IMutationCreateAdminArgs = {
  createAdminInput: ICreateAdminInput;
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreatePaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateQuoteArgs = {
  createQuoteInput: ICreateQuoteInput;
};


export type IMutationCreateSpecialistArgs = {
  createSpecialistInput: ICreateSpecialistInput;
};


export type IMutationCreateSpecialistCommentArgs = {
  createSpecialistCommentInput: ICreateSpecialistCommentInput;
};


export type IMutationCreateSpecialistReviewArgs = {
  createSpecialistReviewInput: ICreateSpecialistReviewInput;
};


export type IMutationCreateStoryArgs = {
  createStoryInput: ICreateStoryInput;
};


export type IMutationCreateTicketArgs = {
  specialistId: Scalars['String'];
};


export type IMutationCreateUnderCommentArgs = {
  createUnderCommentInput: ICreateUnderCommentInput;
};


export type IMutationCreateUnderSpecialistCommentArgs = {
  createUnderSpecialistCommentInput: ICreateUnderSpecialistCommentInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteOwnCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteOwnStoryArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteOwnUnderCommentArgs = {
  underCommentId: Scalars['String'];
};


export type IMutationDeleteQuoteArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteReportedCommentArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteReportedSpecialistCommentArgs = {
  specialistCommentId: Scalars['String'];
};


export type IMutationDeleteReportedStoryArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteReportedUnderCommentArgs = {
  underCommentId: Scalars['String'];
};


export type IMutationDeleteSpecialistOwnCommentArgs = {
  specialistCommentId: Scalars['String'];
};


export type IMutationDeleteUnderSpecialistCommentArgs = {
  underSpecialistCommentId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationLikeCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationLikeStoryArgs = {
  storyId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationReportCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationReportSpecialistCommentArgs = {
  specialistCommentId: Scalars['String'];
};


export type IMutationReportStoryArgs = {
  storyId: Scalars['String'];
};


export type IMutationReportUnderCommentArgs = {
  underCommentId: Scalars['String'];
};


export type IMutationSendTokenToSmsArgs = {
  phoneNumber: Scalars['String'];
};


export type IMutationSpecialistLoginArgs = {
  account: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUpdateCommentArgs = {
  updateCommentInput: IUpdateCommentInput;
};


export type IMutationUpdateOwnUnderCommentArgs = {
  updateUnderCommentInput: IUpdateUnderCommentInput;
};


export type IMutationUpdateQuoteArgs = {
  id: Scalars['String'];
  updateQuoteInput: IUpdateQuoteInput;
};


export type IMutationUpdateSpecialistOwnCommentArgs = {
  updateSpecialistCommentInput: IUpdateSpecialistCommentInput;
};


export type IMutationUpdateSpecialistOwnProfileArgs = {
  updateSpecialistInput: IUpdateSpecialistInput;
};


export type IMutationUpdateStoryArgs = {
  updateStoryId: Scalars['String'];
  updateStoryInput: IUpdateStoryInput;
};


export type IMutationUpdateUnderSpecialistCommentArgs = {
  updateUnderSpecialistCommentInput: IUpdateUnderSpecialistCommentInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserPointArgs = {
  amount: Scalars['Int'];
  isSum: Scalars['Boolean'];
  userId: Scalars['String'];
};


export type IMutationUpdateUserPwdArgs = {
  newPassword: Scalars['String'];
};


export type IMutationUpdateUserPwdWithEmailArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
};


export type IMutationUpdateUserWithAdminAccessArgs = {
  updateUserWithAdminAccessInput: IUpdateUserWithAdminAccessInput;
  userId: Scalars['String'];
};


export type IMutationUploadFileArgs = {
  file: Array<Scalars['Upload']>;
};

export enum IPayment_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPayment_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  /** ????????? ?????? 5??? ?????? */
  fetchBestStories: Array<IStory>;
  /** ?????? ?????? ?????? */
  fetchChatLogs: Array<IChatList>;
  /** ????????? ?????? ????????? ?????? */
  fetchCommentsWithStoryId: Array<IComment>;
  /** ???????????? ????????? ????????? ????????? ?????? */
  fetchLoginSpecialist: ISpecialist;
  /** ???????????? ?????? ?????? ?????? */
  fetchLoginUser: IUser;
  /** ????????? ?????? ?????? ?????? */
  fetchOwnComments: Array<IComment>;
  /** ????????? ????????? ?????? ?????? ?????? */
  fetchOwnLikedStories: Array<IStory>;
  /** ????????? ?????? ?????? */
  fetchOwnStories: Array<IStory>;
  /** ?????? ????????? ????????? ?????? ?????? */
  fetchOwnTickets: Array<ITicket>;
  /** ?????? ?????? ?????? */
  fetchPayments: Array<IPayment>;
  /** ID??? ?????? ?????? */
  fetchQuote: IQuote;
  /** ?????? ?????? ?????? ?????? */
  fetchQuotes: Array<IQuote>;
  /** ?????? ?????? ?????? ?????? */
  fetchReportedComments: Array<IComment>;
  /** ?????? ????????? ?????? ?????? ?????? */
  fetchReportedSpecialistComments: Array<ISpecialistComment>;
  /** ?????? ?????? ?????? ?????? */
  fetchReportedStories: Array<IStory>;
  /** ?????? ????????? ?????? */
  fetchReportedUnderComments: Array<IUnderComment>;
  /** /batches/start/quote API??? ????????? ?????? ?????? */
  fetchSelectedQuote: IQuote;
  /** ID??? ????????? ?????? */
  fetchSpecialist: ISpecialist;
  /** ??????????????? ????????? ?????? */
  fetchSpecialistByPrice: Array<ISpecialist>;
  /** ????????? ?????? ????????? ????????? ?????? */
  fetchSpecialistCommentsWithStoryId: Array<ISpecialistComment>;
  /** ????????? ????????? ????????? ?????? */
  fetchSpecialistOwnComments: Array<ISpecialistComment>;
  /** ????????? ????????? ?????? ?????? */
  fetchSpecialistOwnCustomer: Array<ITicket>;
  /** ??????????????? ?????? ????????? ?????? */
  fetchSpecialistReviewsWithSpecialistId: Array<ISpecialistReview>;
  /** ????????? ?????? ?????? ?????? */
  fetchSpecialists: Array<ISpecialist>;
  /** ????????? ????????? ?????? */
  fetchSpecialsitByRate: Array<ISpecialist>;
  /** ?????? ??????????????? ?????? ?????? */
  fetchStoriesByComment: Array<IStory>;
  /** ?????????????????? ?????? ?????? */
  fetchStoriesByLike: Array<IStory>;
  /** ??????????????? ?????? ?????? */
  fetchStoriesByTime: Array<IStory>;
  /** ID??? ?????? ?????? */
  fetchStory: IStory;
  /** ????????? ?????? ????????? ?????? */
  fetchUnderCommentsWithCommentId: Array<IUnderComment>;
  /** ????????? ????????? ?????? ???????????? ?????? */
  fetchUnderSpecialistCommentWithId: Array<IUnderSpecialistComment>;
  /** ???????????? ?????? ?????? */
  fetchUserWithEmail: IUser;
  /** ??????????????? ?????? ?????? */
  fetchUserWithPhoneNumber: IUser;
  /** ?????? ?????? ?????? */
  fetchUsers: Array<IUser>;
  /** ????????? ????????? ?????? */
  isAdmin: Scalars['Boolean'];
  /** ????????? ????????? ?????? */
  isSpecialist: Scalars['Boolean'];
  /** ?????? ????????? ?????? */
  isUser: Scalars['Boolean'];
};


export type IQueryFetchChatLogsArgs = {
  ticketId: Scalars['String'];
};


export type IQueryFetchCommentsWithStoryIdArgs = {
  page: Scalars['Int'];
  storyId: Scalars['String'];
};


export type IQueryFetchOwnCommentsArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchOwnLikedStoriesArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchOwnStoriesArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchOwnTicketsArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchPaymentsArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchQuoteArgs = {
  id: Scalars['String'];
};


export type IQueryFetchQuotesArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchReportedCommentsArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchReportedSpecialistCommentsArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchReportedStoriesArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchSpecialistArgs = {
  id: Scalars['String'];
};


export type IQueryFetchSpecialistByPriceArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchSpecialistCommentsWithStoryIdArgs = {
  page: Scalars['Int'];
  storyId: Scalars['String'];
};


export type IQueryFetchSpecialistOwnCommentsArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchSpecialistOwnCustomerArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchSpecialistReviewsWithSpecialistIdArgs = {
  page: Scalars['Int'];
  specialistId: Scalars['String'];
};


export type IQueryFetchSpecialistsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchSpecialsitByRateArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchStoriesByCommentArgs = {
  categoryName?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
};


export type IQueryFetchStoriesByLikeArgs = {
  categoryName?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
};


export type IQueryFetchStoriesByTimeArgs = {
  categoryName?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
};


export type IQueryFetchStoryArgs = {
  storyId: Scalars['String'];
};


export type IQueryFetchUnderCommentsWithCommentIdArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchUnderSpecialistCommentWithIdArgs = {
  specialistCommentId: Scalars['String'];
};


export type IQueryFetchUserWithEmailArgs = {
  email: Scalars['String'];
};


export type IQueryFetchUserWithPhoneNumberArgs = {
  phoneNumber: Scalars['String'];
};


export type IQueryFetchUsersArgs = {
  page: Scalars['Int'];
};

export type IQuote = {
  __typename?: 'Quote';
  author: Scalars['String'];
  id: Scalars['String'];
  isSelected: Scalars['Boolean'];
  message: Scalars['String'];
};

export type ISpecialist = {
  __typename?: 'Specialist';
  account: Scalars['String'];
  averageRate: Scalars['Float'];
  career: Scalars['String'];
  id: Scalars['String'];
  imgUrl: Scalars['String'];
  introduction: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  specialistComments: Array<ISpecialistComment>;
  specialistReviews: Array<ISpecialistReview>;
  summary: Scalars['String'];
  tickets: Array<ITicket>;
};

export type ISpecialistChatMessage = {
  __typename?: 'SpecialistChatMessage';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  specialist: ISpecialist;
  ticket: ITicket;
};

export type ISpecialistComment = {
  __typename?: 'SpecialistComment';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isReported: Scalars['Boolean'];
  specialist: ISpecialist;
  story: IStory;
  text: Scalars['String'];
  underSpecialistComments: Array<IUnderSpecialistComment>;
};

export type ISpecialistReview = {
  __typename?: 'SpecialistReview';
  id: Scalars['String'];
  rate: Scalars['Float'];
  specialist: ISpecialist;
  text: Scalars['String'];
  ticket: ITicket;
  user: IUser;
};

export type IStory = {
  __typename?: 'Story';
  category: ICategory;
  commentCounts: Scalars['Int'];
  comments: Array<IComment>;
  createAt: Scalars['DateTime'];
  id: Scalars['String'];
  isReported: Scalars['Boolean'];
  likedusers: Array<IUser>;
  likes: Scalars['Int'];
  specialistComments: Array<ISpecialistComment>;
  storyImage: Array<IStoryImage>;
  text: Scalars['String'];
  title: Scalars['String'];
  user: IUser;
};

export type IStoryImage = {
  __typename?: 'StoryImage';
  deletedAt: Scalars['DateTime'];
  story: IStory;
  url: Scalars['String'];
};

export type ITicket = {
  __typename?: 'Ticket';
  chatMessages: Array<IChatMessage>;
  createdAt: Scalars['DateTime'];
  expired: Scalars['DateTime'];
  id: Scalars['String'];
  refunded: Scalars['Boolean'];
  specialist: ISpecialist;
  specialistChatMessages: Array<ISpecialistChatMessage>;
  specialistReview: ISpecialistReview;
  used: Scalars['Boolean'];
  user: IUser;
};

export type IUnderComment = {
  __typename?: 'UnderComment';
  comment: IComment;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isReported: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IUnderSpecialistComment = {
  __typename?: 'UnderSpecialistComment';
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  specialistComment: ISpecialistComment;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IUpdateCommentInput = {
  commentId: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
};

export type IUpdateQuoteInput = {
  author?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
};

export type IUpdateSpecialistCommentInput = {
  specialistCommentId: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
};

export type IUpdateSpecialistInput = {
  career?: InputMaybe<Scalars['String']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  introduction?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type IUpdateStoryInput = {
  categoryName?: InputMaybe<Scalars['String']>;
  imgUrl?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateUnderCommentInput = {
  contents?: InputMaybe<Scalars['String']>;
  underCommentId: Scalars['String'];
};

export type IUpdateUnderSpecialistCommentInput = {
  contents?: InputMaybe<Scalars['String']>;
  underSpecialistCommentId: Scalars['String'];
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserWithAdminAccessInput = {
  email?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  comments: Array<IComment>;
  email: Scalars['String'];
  id: Scalars['String'];
  likedComments: Array<IComment>;
  likedStories: Array<IStory>;
  nickname: Scalars['String'];
  phone_number: Scalars['String'];
  point: Scalars['Int'];
  specialistReviews: Array<ISpecialistReview>;
  stories: Array<IStory>;
  tickets: Array<ITicket>;
  underComments: Array<IUnderComment>;
  underSpecialistComments: Array<IUnderSpecialistComment>;
};
