import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const isLoadedState = atom({
  key: "isLoadedState",
  default: false,
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const logInStatusState = atom({
  key: "logInStatusState",
  default: false,
});

export const profileEditState = atom({
  key: "profileEditState",
  default: false,
});
