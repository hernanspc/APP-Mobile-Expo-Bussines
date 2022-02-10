import React, { useState } from "react";
import { Header } from "../components/Header.ios";
import MyLogin from "../components/MyLogin";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Login() {
  return (
    <>
      {/* <Header /> */}
      <MyLogin />
    </>
  );
}
