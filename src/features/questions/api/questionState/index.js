"use client";
import { atom } from "recoil";

const questionTitleState = atom({
  key: "questionTitleState",
  default: null,
});
const questionBodyState = atom({
  key: "questionBodyState",
  default: null,
});

export { questionTitleState, questionBodyState };
