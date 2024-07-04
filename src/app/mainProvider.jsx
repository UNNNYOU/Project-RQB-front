"use client";

import { RecoilRoot } from 'recoil';

export const MainProvider = ({ children }) => {
  return (<RecoilRoot>{children}</RecoilRoot>)
}