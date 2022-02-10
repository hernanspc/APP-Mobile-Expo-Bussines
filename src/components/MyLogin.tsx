import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import Logout from "../screens/Logout";

const DATA = [
  {
    id: "01",
    title: "First Item",
  },
];

const MyLogin = () => {
  const renderItem = () => <Logout />;

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default MyLogin;
