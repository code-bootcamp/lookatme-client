import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getUserInfo } from "../../../../../commons/libraries/getUserInfo";
import { IMutation } from "../../../../../commons/types/generated/types";
import { FETCH_COMMENTS_WITH_STORY_ID } from "../../comment-list/comment-list.queries";
import CommentEditUserPresenter from "./comment-edit-user.presenter";
import { DELETE_OWN_COMMENT, LIKE_COMMENT } from "./comment-edit-user.queries";
import { ICommentEditUserContainer } from "./comment-edit-user.types";

export default function CommentEditUserContainer(
  props: ICommentEditUserContainer
) {
  const router = useRouter();

  const userInfo = getUserInfo();

  const [isUserCommentEdit, setIsUserCommentEdit] = useState(false);
  const [editUserContents, setEditUserContents] = useState("");
  const [, setEditUserContentsLength] = useState(0);

  const [isUserReply, setIsUserReply] = useState(false);

  const [deleteOwnComment] =
    useMutation<Pick<IMutation, "deleteOwnComment">>(DELETE_OWN_COMMENT);

  const onClickUserEdit = () => {
    setIsUserCommentEdit(true);
  };

  const onClickUserDelete = async () => {
    try {
      await deleteOwnComment({
        variables: {
          commentId: props.UserCommentEl.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS_WITH_STORY_ID,
            variables: { page: 0, storyId: router.query.communityId },
          },
        ],
      });
      message.success("댓글이 삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeEditUserContents = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditUserContents(event.target.value);
    setEditUserContentsLength(event.target.value.length);
  };

  const onClickUserReply = () => {
    setIsUserReply(true);
  };

  const [likeComment] =
    useMutation<Pick<IMutation, "likeComment">>(LIKE_COMMENT);

  const onClickLikeComment = (UserCommentId: string) => async () => {
    try {
      await likeComment({
        variables: { commentId: UserCommentId },
        refetchQueries: [
          {
            query: FETCH_COMMENTS_WITH_STORY_ID,
            variables: { page: 0, storyId: router.query.communityId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <CommentEditUserPresenter
      isUserCommentEdit={isUserCommentEdit}
      setIsUserCommentEdit={setIsUserCommentEdit}
      editUserContents={editUserContents}
      onClickUserEdit={onClickUserEdit}
      onClickUserDelete={onClickUserDelete}
      onChangeEditUserContents={onChangeEditUserContents}
      UserCommentEl={props.UserCommentEl}
      UserCommentData={props.UserCommentData}
      userInfo={userInfo}
      isUserReply={isUserReply}
      setIsUserReply={setIsUserReply}
      onClickUserReply={onClickUserReply}
      onClickLikeComment={onClickLikeComment}
    ></CommentEditUserPresenter>
  );
}
