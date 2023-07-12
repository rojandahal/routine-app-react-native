import { atom } from "recoil";

export const profileState = atom({
  key: "profileState",
  default: {
    userLoggedIn: false,
    user: "student",
  },
});
