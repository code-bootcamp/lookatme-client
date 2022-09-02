import { useRouter } from "next/router";
import * as S from "./styles";

const SIGN_UP = ["/signup/"];
const LOGIN = ["/login/"];
const ID_FIND = ["/idFind/"];
const PASSWORD_FIND = ["/passwordFind/"];
const CODIES = "/codies/";
const WRITE = "/codies/new";
const EDIT = "/codies/edit";
const MYPAGE = ["/myPage/"];

export default function UserInfoPageNavigationPresenter() {
  const router = useRouter();

  const signUpPage = SIGN_UP.includes(router.asPath);
  const loginPage = LOGIN.includes(router.asPath);
  const idFindPage = ID_FIND.includes(router.asPath);
  const passwordFindPage = PASSWORD_FIND.includes(router.asPath);
  const writePage = router.asPath.includes(WRITE);
  const editPage = router.asPath.includes(EDIT);
  const myPage = MYPAGE.includes(router.asPath);

  return (
    <S.Wrapper>
      <S.PageTitle>
        {signUpPage && "Sign Up"}
        {loginPage && "Login"}
        {idFindPage && "ID 찾기"}
        {passwordFindPage && "PW 찾기"}
        {writePage && "코디 업로드"}
        {editPage && "코디 수정"}
        {myPage && "My Page"}
      </S.PageTitle>
    </S.Wrapper>
  );
}
