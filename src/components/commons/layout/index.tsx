import { useRouter } from "next/router";
import { ReactNode } from "react";
import CategoryPageHeader from "./categoryPage/Header/container";
import CategoryPageNavigation from "./categoryPage/Navigation/container";
import MainPageBanner from "./mainPage/Banner/container";
import MainPageHeader from "./mainPage/Header/container";
import UserInfoPageHeader from "./userInfoPage/Header/container";
import UserInfoPageNavigation from "./userInfoPage/Navigation/container";
import WritePageMyPageHeader from "./writePageMyPage/Header/container";
import WritePageMyPageNavigation from "./writePageMyPage/Navigation/container";

interface ILayoutProps {
  children: ReactNode;
}

const MAIN_PAGE = ["/codyList"];
const CATEGORY_PAGE = ["/codyList/category"];
const USER_INFO = ["/signUp", "/login", "/idFind", "passwordFind"];
const CODIES = ["/codies", "/myPage"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const mainPage = MAIN_PAGE.includes(router.asPath);

  const categoryPage = CATEGORY_PAGE.includes(router.asPath);

  const userInfoPage = USER_INFO.includes(router.asPath);

  const writePageMyPage = CODIES.includes(router.asPath);

  return (
    <>
      {mainPage && (
        <>
          <MainPageHeader></MainPageHeader>
          <MainPageBanner></MainPageBanner>
        </>
      )}

      {categoryPage && (
        <>
          <CategoryPageHeader></CategoryPageHeader>
          <CategoryPageNavigation></CategoryPageNavigation>
        </>
      )}

      {userInfoPage && (
        <>
          <UserInfoPageHeader></UserInfoPageHeader>
          <UserInfoPageNavigation></UserInfoPageNavigation>
        </>
      )}

      {writePageMyPage && (
        <>
          <WritePageMyPageHeader></WritePageMyPageHeader>
          <WritePageMyPageNavigation></WritePageMyPageNavigation>
        </>
      )}

      <div>{props.children}</div>
    </>
  );
}
