import * as S from "./signUp.styles";

export default function SignUpUI() {
  return (
    <S.Wrapper>
      <S.Main>
        <S.InputWrapper>
          <S.Label>이름</S.Label>
          <S.Name placeholder="Enter First and Last Name" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Email placeholder="Enter Email" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password placeholder="Enter Password" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호 확인</S.Label>
          <S.Password placeholder="Enter Password" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>전화번호</S.Label>
          <S.PhoneWrapper>
            <S.MobileCarrier>
              <option>SKT</option>
              <option>KT</option>
              <option>LG U+</option>
            </S.MobileCarrier>
            <S.PhoneNumber></S.PhoneNumber>
          </S.PhoneWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.InputWrapper>
            <S.Zipcode />
            <S.SearchButton>주소검색</S.SearchButton>
            <div>
              <S.Input />
            </div>
          </S.InputWrapper>
        </S.InputWrapper>
        <S.HeightWrapper>
          <S.Label>키:</S.Label>
          <S.HeightInput />
        </S.HeightWrapper>
        <S.GenderWrapper>
          <button>male</button>
          <button>female</button>
        </S.GenderWrapper>
      </S.Main>
      <S.Footer>
        <button>회원가입</button>
      </S.Footer>
    </S.Wrapper>
  );
}
