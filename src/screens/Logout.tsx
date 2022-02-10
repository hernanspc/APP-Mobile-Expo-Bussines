import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { asyncFetchApi, fetchApiEffect } from "../utils/api";
import { apis } from "../utils/const";
import {
  EMPRESA_APK,
  EMPRESA,
  API_BASE_URL,
  API_HOST,
} from "../utils/constants";

type Props = {
  isLogger: () => void;
};
const Logout = ({ isLogger }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());

  const postBody = {
    Empresa: EMPRESA[0],
    Nombre: formData.user,
    Clave: formData.password,
  };

  const onSubmit = async () => {
    console.log(
      "body: ",
      postBody.Empresa,
      " | ",
      postBody.Nombre,
      postBody.Clave
    );
    // const postBody = {
    //   Empresa: "REMESAS_JA",
    //   Nombre: "admin",
    //   Clave: "0716",
    // };

    //`https://remesasandroid.azurewebsites.net/APP_TSP_LOGIN_SISTEMA`
    await fetch(API_BASE_URL + apis.LOGIN_SISTEMA, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        if (data.length > 0) {
          // console.log("OK");
          console.log("response: ", data);
          isLogger();
        } else {
          console.log("Ingreso Failed");
          // setFormData(defaultFormValue());
          Alert.alert(
            "¡Usuario no válido! ",
            " El nombre de usuario o la contraseña son incorrectos.",
            [{ text: "Ok" }]
          );
          return;
        }
      })
      .catch((error) => {
        console.log("Catch error: ", error);
      });
    // isLogger();
  };

  const onChange = (e: { nativeEvent: { text: any } }, type: any) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View>
      <Image
        // source={require("../../assets/app-img/emp_hadax.png")}
        // source={require("../../assets/app-img/emp_multiplan.png")}
        // source={require("../../assets/app-img/illustrations_not_combo_active.png")}
        // source={require("../../assets/app-img/illustrations_plan_pospago.png")}
        source={require("../../assets/app-img/plh_app_update.png")}
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
              name="account"
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
