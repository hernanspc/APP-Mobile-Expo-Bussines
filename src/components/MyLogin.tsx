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

type Props = {
  isLogger: () => void;
};

const MyLogin = ({ isLogger }: Props) => {
  const renderItem = () => <Logout isLogger={isLogger} />;

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
