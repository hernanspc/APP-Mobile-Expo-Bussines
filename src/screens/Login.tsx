import React, { useState } from "react";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { HeaderIos } from "../components/Header.ios";
import { Header } from "../components/Header";
import MyLogin from "../components/MyLogin";

type Props = {
  isLogger: () => void;
};

export function Login({ isLogger }: Props) {
  return (
    <>
      {Platform.OS === "ios" ? <HeaderIos /> : <Header />}
      <MyLogin isLogger={isLogger} />
    </>
  );
}
