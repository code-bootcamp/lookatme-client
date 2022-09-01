import { useRouter } from "next/router";
import MainPageHeaderPresenter from "./presenter";

export default function MainPageHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/codyList");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignup = () => {
    router.push("/signup");
  };

  return (
    <MainPageHeaderPresenter
      onClickLogin={onClickLogin}
      onClickLogo={onClickLogo}
      onClickSignup={onClickSignup}
    ></MainPageHeaderPresenter>
  );
}
