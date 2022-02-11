import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Notion</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
        To do
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#00a680",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
});
