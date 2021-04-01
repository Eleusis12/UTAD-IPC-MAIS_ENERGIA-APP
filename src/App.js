import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  // Ação a tomar quando carrega no botão
  const buttonClickedHandler = () => {
    console.log("Carregaste no botão");
    // do something
  };

  const image = require("./assets/BackgroundImage.jpg");

  // Usar as seguintes fonts
  // TODO: Escolher fonts mais fáceis de visualizar
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  // Importar efeito pulsing

  // Se a font ainda não carregou
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.screen}>
      <ImageBackground source={image} style={styles.imageBg}>
        <View style={styles.container}>
          <Text style={styles.startTrainingText}>Começar treino</Text>

          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.startTraining}
          >
            <FontAwesome5 name="dumbbell" size={72} color="black" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

/// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  startTraining: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "grey",
  },
  startTrainingText: {
    fontFamily: "Inter_900Black",
    paddingTop: -20,
    paddingBottom: 20,
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});
