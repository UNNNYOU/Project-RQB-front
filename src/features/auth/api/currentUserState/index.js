"use client";
import { atom } from "recoil";

const currentUserState = atom({
  key: "currentUserState",
  default: {
    uuid: null,
    name: null,
    github_uid: null,
    term: null,
    profile: null,
  },
});

export default currentUserState;
