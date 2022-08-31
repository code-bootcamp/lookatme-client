import * as S from "./styles";

export default function CategoryPageHeaderPresenter() {
  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.Logo src="/Logo.jpg"></S.Logo>
        <S.RightWrapper>
          <S.SearchInput></S.SearchInput>
          <S.LogInButton>로그인</S.LogInButton>
          <S.SignUpButton>회원가입</S.SignUpButton>
          <S.HamburgerButton>
            <img src="Menu.jpg"></img>
          </S.HamburgerButton>
        </S.RightWrapper>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
