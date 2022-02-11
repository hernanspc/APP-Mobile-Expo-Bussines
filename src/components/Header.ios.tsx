import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export function HeaderIos() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sistema</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#273FAD",
    backgroundColor: "#00a680",
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
  },
  header: {
    paddingBottom: 30,
    // backgroundColor: "#273FAD",
    backgroundColor: "#00a680",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
  },
  headerText: {
    marginTop: 10,
    fontSize: 24,
    color: "#FFF",
    // fontFamily: "Poppins-Regular",
  },
});
