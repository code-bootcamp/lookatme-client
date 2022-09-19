import * as S from "./header.styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { IHeaderPresenterProps } from "./header.types";
import { Space } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

export default function HeaderPresenter(props: IHeaderPresenterProps) {
  const [accessToken] = useRecoilState(accessTokenState);

  return (
    <S.Wrapper>
      <S.ButtonWrapper adminMyPage={props.adminMyPage}>
        <S.Logo>
          <S.LogoImage
            src="/logo.png/"
            onClick={props.onClickLogo}
          ></S.LogoImage>
        </S.Logo>
        <Space>
          <S.MenuButton type="primary" onClick={props.showMenu}>
            <GiHamburgerMenu
              style={{ width: "25px", height: "25px", color: "white" }}
            />
          </S.MenuButton>
        </Space>
      </S.ButtonWrapper>
      <S.DrawerStyle
        placement={props.placement}
        onClose={props.onClose}
        open={props.open}
        key={props.placement}
      >
        {!accessToken && (
          <>
            <S.DrawerButton onClick={props.onClickLogin}>로그인</S.DrawerButton>
            <S.DrawerButton onClick={props.onClickSignUp}>
              회원가입
            </S.DrawerButton>
          </>
        )}

        {accessToken && (
          <>
            <S.DrawerButton onClick={props.onClickLogOut}>
              로그아웃
            </S.DrawerButton>
            <S.DrawerButton onClick={props.onClickMyPage}>
              마이페이지
            </S.DrawerButton>
          </>
        )}
        <S.DrawerButton onClick={props.onClickCommunity}>
          커뮤니티
        </S.DrawerButton>
        <S.DrawerButton onClick={props.onClickExpert}>
          전문가 찾기
        </S.DrawerButton>
        {!accessToken && (
          <S.LoginWrapper>
            <S.LoginButton onClick={props.onClickMoveToExpert}>
              전문가 로그인
            </S.LoginButton>
            <S.LoginLine>|</S.LoginLine>
            <S.LoginButton onClick={props.onClickMoveToAdmin}>
              관리자 로그인
            </S.LoginButton>
          </S.LoginWrapper>
        )}
      </S.DrawerStyle>
    </S.Wrapper>
  );
}
