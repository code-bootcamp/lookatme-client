import * as S from "./styles";

interface IUserInfoPageHeaderPresenterProps {
  onClickLogo: () => void;
}

export default function UserInfoPageHeaderPresenter(
  props: IUserInfoPageHeaderPresenterProps
) {
  return (
    <S.Wrapper>
      <S.Logo src="/Logo.jpg" onClick={props.onClickLogo}></S.Logo>
    </S.Wrapper>
  );
}
