import React, { useState } from "react";
import { Header } from "../components/Header.ios";
import MyTasksList from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";
import Logout from "../screens/Logout";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Login() {
  return (
    <>
      {/* <Header /> */}
      <MyTasksList />
    </>
  );
}
