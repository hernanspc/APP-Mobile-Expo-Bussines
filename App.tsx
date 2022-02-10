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

export default function App() {
  const [user, setUser] = useState(undefined);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View>
        <StatusBar backgroundColor="#b8b8b8" />

        <SafeAreaView style={styles.background}>
          <SkeletonFbLoader />
          {user ? <Home /> : <Logout />}
        </SafeAreaView>
      </View>
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
    backgroundColor: "#15212b",
    height: "100%",
  },
});
