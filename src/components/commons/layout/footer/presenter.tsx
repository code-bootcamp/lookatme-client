import * as S from "./styles";

export default function FooterPresenter() {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.TopButton>이용약관</S.TopButton>
        <S.TopButton>개인정보 처리방침</S.TopButton>
        <S.TopButton>청소년 보호정책</S.TopButton>
        <S.TopButton>고객지원</S.TopButton>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.LeftWrapper>
          <S.FooterTitle>(주) LookAtMe</S.FooterTitle>
          <S.FooterContents>대표 : team6</S.FooterContents>
          <S.FooterContents>고객센터 1234-5678</S.FooterContents>
          <S.FooterContents>
            (평일 9:00 ~ 18:00 / 점심시간 13:00 ~ 14:00 / 주말 및 공휴일 휴무)
          </S.FooterContents>
          <S.FooterContents>
            사업장 주소 : 서울특별시 구로구 디지털로 300 13F
          </S.FooterContents>
          <S.FooterContents>사업자 등록번호 : 000-00-00000</S.FooterContents>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.FooterTitle>1:1 문의하기</S.FooterTitle>
          <S.FooterContents>소중한 고객님의 의견을 듣습니다.</S.FooterContents>
          <S.FooterContents>담당자 : LookAtMe CS팀</S.FooterContents>
          <S.FooterContents>E-mail : cs.team01@lookatme.world</S.FooterContents>
        </S.RightWrapper>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
