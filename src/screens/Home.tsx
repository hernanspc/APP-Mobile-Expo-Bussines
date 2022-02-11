import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, View, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

type Props = {
  signOff: () => void;
};
const Home = ({ signOff }: Props) => {
  const [months, setMonths] = useState(null);

  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.viewContainer}>
        <View style={styles.formContainer}>
          <Button
            title="Cerrar Sesion"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btnStyle}
            onPress={signOff}
          />

          <View style={styles.selectContainer}>
            <RNPickerSelect
              style={picketSelectStyles}
              onValueChange={(value) => setMonths(value)}
              placeholder={{
                label: "Seleccióna los plazos...",
                value: null,
              }}
              items={[
                { label: "3 meses", value: 3 },
                { label: "6 meses", value: 6 },
                { label: "12 meses", value: 12 },
                { label: "24 meses", value: 24 },
              ]}
            />
          </View>
        </View>
      </View>
    </>
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
  formContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  selectContainer: {
    marginTop: 60,
    width: "95%",
  },
});

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#fff",
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#fff",
  },
});
