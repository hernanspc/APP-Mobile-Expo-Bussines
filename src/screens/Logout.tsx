import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  SafeAreaView,
  Image,
} from "react-native";
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
      <Image
        source={require("../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <Input
          placeholder="Usuario"
          containerStyle={styles.inputForm}
          onChange={(e) => onChange(e, "user")}
          rightIcon={
            <Icon
              type="material-community"
              name="at"
              iconStyle={styles.iconRight}
              tvParallaxProperties={undefined}
            />
          }
        />
        <Input
          placeholder="Contraseña"
          containerStyle={styles.inputForm}
          onChange={(e) => onChange(e, "password")}
          // password={true}
          secureTextEntry={showPassword ? false : true}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              iconStyle={styles.iconRight}
              onPress={() => setShowPassword(!showPassword)}
              tvParallaxProperties={undefined}
            />
          }
        />
        <Button
          title="Iniciar Sesion"
          containerStyle={styles.btnContainerLogin}
          buttonStyle={styles.btnLogin}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default Logout;

function defaultFormValue() {
  return {
    user: "",
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

  viewContainer: {
    marginLeft: 40,
    marginRight: 40,
  },
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
});
