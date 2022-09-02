import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

export const withAuth = (Component) => (props) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // // [해결방법 : 3번째 - recoil selector 활용하기]
  useEffect(() => {
    aaa.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        Modal.info({ content: "로그인 후 이용 가능합니다!!" });
        router.push("/login");
      }
    });
  }, []);

  return <Component {...props} />;
};
