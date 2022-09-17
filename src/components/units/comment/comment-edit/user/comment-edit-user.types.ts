import { SetterOrUpdater } from "recoil";
import { IComment, IQuery } from "../../../../../commons/types/generated/types";

export interface ICommentEditUserContainer {
  UserCommentEl: IComment;
  UserCommentData: Pick<IQuery, "fetchCommentsWithStoryId"> | undefined;
}

export interface ICommentEditUserPresenter {
  isUserCommentEdit: boolean;
  setIsUserCommentEdit: SetterOrUpdater<boolean>;
  editUserContents: string;
  onClickUserEdit: () => void;
  onClickUserDelete: () => void;
  UserCommentEl: IComment;
  UserCommentData: Pick<IQuery, "fetchCommentsWithStoryId"> | undefined;
  userInfo: Pick<IQuery, "fetchLoginUser"> | undefined;
}