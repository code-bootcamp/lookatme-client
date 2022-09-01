import * as S from "./signUp.styles";
import { ISignUpUIProps } from "./signUp.types";

export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <>
      {props.isOpen && (
        <S.AddressModal
          visible={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
        <S.Wrapper>
          <S.Main>
            <S.InputWrapper>
              <S.Label>이름</S.Label>
              <S.Name
                type="text"
                placeholder="닉네임을 입력해주세요"
                {...props.register("name")}
                onChange={props.onChangeName}
              />
              <S.Error>{props.formState.errors.name?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>이메일</S.Label>
              <S.Email
                type="email"
                placeholder="이메일을 입력해주세요"
                {...props.register("email")}
                onChange={props.onChangeEmail}
              />
              <S.Error>{props.formState.errors.email?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호</S.Label>
              <S.Password
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...props.register("password")}
                onChange={props.onChangePassword}
              />
              <S.Error>{props.formState.errors.password?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호 확인</S.Label>
              <S.Password
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                {...props.register("password2")}
                onChange={props.onChangePassword2}
              />
              <S.Error>{props.formState.errors.password2?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>전화번호</S.Label>
              <S.PhoneWrapper>
                <S.MobileCarrier>
                  <option>SKT</option>
                  <option>KT</option>
                  <option>LG U+</option>
                  <option>알뜰폰</option>
                </S.MobileCarrier>
                <S.PhoneNumber
                  type="number"
                  {...props.register("phoneNumber")}
                  onChange={props.onChangePhoneNumber}
                />
              </S.PhoneWrapper>
              <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>주소</S.Label>
              <S.InputWrapper>
                <S.Zipcode
                  placeholder="07250"
                  readOnly
                  value={props.zipcode || ""}
                />
                <S.SearchButton
                  type="button"
                  onClick={props.onClickAddressSearch}
                >
                  주소검색
                </S.SearchButton>
                <div>
                  <S.Address readOnly value={props.address || ""} />
                  <S.AddressDetail onChange={props.onChangeAddressDetail} />
                </div>
              </S.InputWrapper>
            </S.InputWrapper>
            <S.HeightWrapper>
              <S.Label>키:</S.Label>
              <S.HeightInput
                onChange={props.onChangeHeight}
                placeholder="173"
              />
            </S.HeightWrapper>
            <S.Error>{props.formState.errors.height?.message}</S.Error>
            <S.GenderWrapper>
              <input
                type="radio"
                id="male"
                value="male"
                {...props.register("gender")}
              />
              <label htmlFor="male">남자</label>
              <input
                type="radio"
                id="female"
                value="female"
                {...props.register("gender")}
              />
              <label htmlFor="female">여자</label>
            </S.GenderWrapper>
          </S.Main>
          <S.Footer>
            <button>회원가입</button>
          </S.Footer>
        </S.Wrapper>
      </form>
    </>
  );
}
