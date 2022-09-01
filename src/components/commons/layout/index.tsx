import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { breakPoints } from "../../../commons/styles/media";
import CategoryPageHeader from "./categoryPage/Header/container";
import CategoryPageNavigation from "./categoryPage/Navigation/container";
import Footer from "./footer/container";
import MainPageBanner from "./mainPage/Banner/container";
import MainPageHeader from "./mainPage/Header/container";
import UserInfoPageHeader from "./userInfoPage/Header/container";
import UserInfoPageNavigation from "./userInfoPage/Navigation/container";

interface ILayoutProps {
  children: ReactNode;
}

const MAIN_PAGE = ["/codyList/"];
const CATEGORY_PAGE = [
  "/codyList/category/",
  "/codyList/category/bodyShape/",
  "/codyList/category/style/",
  "/codyList/category/season/",
  "/codyList/category/gender/",
  "/codyList/category/brand/",
  "/codyList/category/price/",
];
const USER_INFO = [
  "/signup/",
  "/login/",
  "/idFind/",
  "/passwordFind/",
  "/codies/",
  "/myPage/",
];

const UserInfoBody = styled.div`
  margin: 4.875rem 49.5rem;

  @media ${breakPoints.tablet} {
    margin: 4.875rem 24.75rem;
  }

  @media ${breakPoints.mobile} {
    margin: 4.875rem 0rem;
  }
`;

const MainBody = styled.div`
  margin: 4.875rem 22.5rem;
  border: 1px solid red;

  @media ${breakPoints.tablet} {
    margin: 4.875rem 11.25rem;
  }

  @media ${breakPoints.mobile} {
    margin: 4.875rem 0rem;
  }
`;

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

      {userInfoPage ? (
        <UserInfoBody>{props.children}</UserInfoBody>
      ) : (
        <MainBody>{props.children}</MainBody>
      )}

      <Footer></Footer>
    </>
  );
}
