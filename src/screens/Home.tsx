import React from "react";
import { StyleSheet, Text, StatusBar, View, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";

type Props = {
  signOff: () => void;
};
const Home = ({ signOff }: Props) => {
  return (
    <View style={styles.viewContainer}>
      <Button
        title="Cerrar Sesion"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        onPress={signOff}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  viewContainer: {
    marginLeft: 40,
    marginRight: 40,
  },
});
