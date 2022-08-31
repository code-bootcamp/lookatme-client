import * as S from "./login.styles";

export default function LoginUI() {
  return (
    <S.Wrapper>
      <S.Main>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Email placeholder="Enter Email" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password placeholder="Enter Password" />
        </S.InputWrapper>
        <button>로그인</button>
      </S.Main>
      <S.Footer>
        <S.InnerFooter>아이디 찾기|비밀번호 찾기</S.InnerFooter>
        <S.InnerFooter>SNS계정으로 로그인하기</S.InnerFooter>
        <S.ImgFooter>
          <S.SocialImg src="/구글.png" />
          <S.SocialImg src="/네이버.png" />
          <S.SocialImg src="/카카오.png" />
        </S.ImgFooter>
        <S.InnerFooter>
          멤버가 아니신가요?
          <button>회원가입</button>
        </S.InnerFooter>
      </S.Footer>
    </S.Wrapper>
  );
}
