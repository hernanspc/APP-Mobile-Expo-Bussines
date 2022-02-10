import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {}, []);

  return (
    <View>
      <Text>Account..</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
