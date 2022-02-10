// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, View, SafeAreaView } from "react-native";
import ContentLoader, {
  FacebookLoader,
  InstagramLoader,
  Bullets,
} from "react-native-easy-content-loader";
import SkeletonFbLoader from "./src/components/skeleton";
import Home from "./src/screens/Home";
import Logout from "./src/screens/Logout";
import { Login } from "./src/screens/Login";

export default function App() {
  const [user, setUser] = useState<boolean>(false);

  const logIn = () => {
    setUser(true);
  };

  const signOff = () => {
    setUser(!user);
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      {/* <SafeAreaView style={styles.background}> */}
      {/* <SkeletonFbLoader /> */}
      {user ? <Home signOff={signOff} /> : <Login isLogger={logIn} />}
      {/* </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
