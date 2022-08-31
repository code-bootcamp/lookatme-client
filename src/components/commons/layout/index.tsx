import { useRouter } from "next/router";
import { ReactNode } from "react";
import CategoryPageHeader from "./categoryPage/Header/container";
import CategoryPageNavigation from "./categoryPage/Navigation/container";
import MainPageBanner from "./mainPage/Banner/container";
import MainPageHeader from "./mainPage/Header/container";
import UserInfoPageHeader from "./userInfoPage/Header/container";
import UserInfoPageNavigation from "./userInfoPage/Navigation/container";

interface ILayoutProps {
  children: ReactNode;
}

const MAIN_PAGE = ["/codyList"];
const CATEGORY_PAGE = ["/codyList/category"];
const USER_INFO = [
  "/signUp",
  "/login",
  "/idFind",
  "/passwordFind",
  "/codies",
  "/myPage",
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const mainPage = MAIN_PAGE.includes(router.asPath);

  const categoryPage = CATEGORY_PAGE.includes(router.asPath);

  const userInfoPage = USER_INFO.includes(router.asPath);

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

      <div>{props.children}</div>
    </>
  );
}
