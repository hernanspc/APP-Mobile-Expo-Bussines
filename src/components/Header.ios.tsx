import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
        <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
          Sistema
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#273FAD",
    // backgroundColor: "#00a680",
  },
  header: {
    paddingBottom: 30,
    // backgroundColor: "#273FAD",
    backgroundColor: "#00a680",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    marginTop: 10,
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
});
