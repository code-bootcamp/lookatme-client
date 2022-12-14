import { useMutation, useQuery } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import {
  IMutation,
  IMutationDeleteOwnStoryArgs,
  IMutationLikeStoryArgs,
  IQuery,
  IQueryFetchStoryArgs,
} from "../../../../commons/types/generated/types";
import { withAuth } from "../../../commons/hocs/withAuth";
import { FETCH_STORIES_BY_TIME } from "../../community-list/community-list.queries";
import CommunityDetailUi from "./CommunityDetail.presenter";
import {
  DELETE_OWN_STORY,
  FETCH_STORY,
  LIKE_STORY,
} from "./CommunityDetail.queries";

function CommunityDetail() {
  const router = useRouter();
  const UserInfo = getUserInfo();
  const { data } = useQuery<Pick<IQuery, "fetchStory">, IQueryFetchStoryArgs>(
    FETCH_STORY,
    {
      variables: { storyId: String(router.query.communityId) },
    }
  );
  console.log(data);
  const [deleteOwnStory] = useMutation<
    Pick<IMutation, "deleteOwnStory">,
    IMutationDeleteOwnStoryArgs
  >(DELETE_OWN_STORY);

  const [likeStory] = useMutation<
    Pick<IMutation, "likeStory">,
    IMutationLikeStoryArgs
  >(LIKE_STORY);

  // 사연 삭제
  const onClickDeleteStory = async () => {
    try {
      await deleteOwnStory({
        variables: {
          id: String(router.query.communityId),
        },
        refetchQueries: [
          {
            query: FETCH_STORIES_BY_TIME,
            variables: { id: String(router.query.communityId) },
          },
        ],
      });
      if (
        data?.fetchStory.user.nickname !== UserInfo?.fetchLoginUser.nickname
      ) {
        message.error("다른 사람이 쓴 글은 삭제할 수 없습니다.");
      } else {
        message.success(
          `${UserInfo?.fetchLoginUser.nickname}님 삭제가 완료되었습니다.`
        );
        router.push("/community");
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 공감 버튼
  const onClickHeart = async () => {
    try {
      await likeStory({
        variables: { storyId: String(router.query.communityId) },
        refetchQueries: [
          {
            query: FETCH_STORY,
            variables: { storyId: String(router.query.communityId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 페이지 이동
  const onClickMoveToList = () => {
    router.push("/community");
  };

  const onClickMoveToUpdate = () => {
    router.push(`/community/${router.query.communityId}/edit`);
  };

  return (
    <CommunityDetailUi
      data={data}
      UserInfo={UserInfo}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickDeleteStory={onClickDeleteStory}
      onClickHeart={onClickHeart}
    />
  );
}

export default withAuth(CommunityDetail);
