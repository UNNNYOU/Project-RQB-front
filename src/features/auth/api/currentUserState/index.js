"use client";
import { atom } from "recoil";

const currentUserState = atom({
  key: "currentUserState",
  default: {
    name: null,
    github_uid: null,
    term: null,
    profile: null,
  },
});

export default currentUserState;
