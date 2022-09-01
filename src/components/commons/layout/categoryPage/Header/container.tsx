import { useRouter } from "next/router";
import CategoryPageHeaderPresenter from "./presenter";

export default function CategoryPageHeader() {
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
    <CategoryPageHeaderPresenter
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      onClickSignup={onClickSignup}
    ></CategoryPageHeaderPresenter>
  );
}
