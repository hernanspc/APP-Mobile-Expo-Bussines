import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, View, SafeAreaView } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

const Logout = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());

  const onSubmit = () => {
    console.log("solicito");
  };

  const onChange = (e: { nativeEvent: { text: any } }, type: any) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View>
      <Input
        placeholder="Usuario"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />

      <Text>PANTALLA LOGIN</Text>
    </View>
  );
};

export default Logout;

function defaultFormValue() {
  return {
    email: "",
    password: "",
  };
}
const styles = StyleSheet.create({
  formContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
