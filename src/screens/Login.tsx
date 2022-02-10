import React, { useState } from "react";
import { Header } from "../components/Header.ios";
import MyLogin from "../components/MyLogin";

type Props = {
  isLogger: () => void;
};

export function Login({ isLogger }: Props) {
  return (
    <>
      <Header />
      <MyLogin isLogger={isLogger} />
    </>
  );
}
