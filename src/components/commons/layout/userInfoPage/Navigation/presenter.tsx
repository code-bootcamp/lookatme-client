import { useRouter } from "next/router";
import * as S from "./styles";

const SIGN_UP = ["/signUp/"];
const LOGIN = ["/login/"];
const ID_FIND = ["/idFind/"];
const PASSWORD_FIND = ["/passwordFind/"];
const CODIES = ["/codies/"];
const MYPAGE = ["/myPage/"];

export default function UserInfoPageNavigationPresenter() {
  const router = useRouter();

  const signUpPage = SIGN_UP.includes(router.asPath);
  const loginPage = LOGIN.includes(router.asPath);
  const idFindPage = ID_FIND.includes(router.asPath);
  const passwordFindPage = PASSWORD_FIND.includes(router.asPath);
  const codiesPage = CODIES.includes(router.asPath);
  const myPage = MYPAGE.includes(router.asPath);

  return (
    <S.Wrapper>
      <S.PageTitle>
        {signUpPage && "Sign Up"}
        {loginPage && "Login"}
        {idFindPage && "ID 찾기"}
        {passwordFindPage && "PW 찾기"}
        {codiesPage && "코디 업로드"}
        {myPage && "My Page"}
      </S.PageTitle>
    </S.Wrapper>
  );
}
