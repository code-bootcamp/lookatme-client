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

const MAIN_PAGE = "/codyList/";

const CATEGORY_PAGE = "/codyList/category/";

const USER_INFO = [
  "/signup/",
  "/login/",
  "/idFind/",
  "/passwordFind/",
  "/myPage/",
];

const WRITE_PAGE = "/codies/";

const BODY_USER_INFO = ["/signup/", "/login/", "/idFind/", "/passwordFind/"];

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
`;

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
  margin: 4.875rem 10rem;
  border: 1px solid red;
  width: 1600px;

  @media ${breakPoints.tablet} {
    margin: 4.875rem 5rem;
    border: 1px solid red;
  }

  @media ${breakPoints.mobile} {
    margin: 4.875rem 0rem;
    border: 1px solid red;
  }
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const mainPage = router.asPath.includes(MAIN_PAGE);

  const categoryPage = router.asPath.includes(CATEGORY_PAGE);

  const userInfoPage = USER_INFO.includes(router.asPath);

  const writePage = router.asPath.includes(WRITE_PAGE);

  const bodyUserInfoPage = BODY_USER_INFO.includes(router.asPath);

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

      {writePage && (
        <>
          <UserInfoPageHeader></UserInfoPageHeader>
          <UserInfoPageNavigation></UserInfoPageNavigation>
        </>
      )}

      <BodyWrapper>
        {bodyUserInfoPage ? (
          <UserInfoBody>{props.children}</UserInfoBody>
        ) : (
          <MainBody>{props.children}</MainBody>
        )}
      </BodyWrapper>

      <Footer></Footer>
    </>
  );
}
