import * as S from "./styles";

interface IMainPageHeaderPresenterProps {
  onClickLogo: () => void;
  onClickLogin: () => void;
  onClickSignup: () => void;
}

export default function MainPageHeaderPresenter(
  props: IMainPageHeaderPresenterProps
) {
  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.Logo src="/Logo.jpg" onClick={props.onClickLogo}></S.Logo>
        <S.RightWrapper>
          <S.SearchInput></S.SearchInput>
          <S.LogInButton onClick={props.onClickLogin}>로그인</S.LogInButton>
          <S.SignUpButton onClick={props.onClickSignup}>
            회원가입
          </S.SignUpButton>
        </S.RightWrapper>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
