import { useRouter } from "next/router";
import UserInfoPageHeaderPresenter from "./presenter";

export default function UserInfoPageHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/codyList");
  };

  return (
    <UserInfoPageHeaderPresenter
      onClickLogo={onClickLogo}
    ></UserInfoPageHeaderPresenter>
  );
}
