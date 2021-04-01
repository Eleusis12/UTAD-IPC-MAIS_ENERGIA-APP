import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import StartButton from "../components/StartButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";

function Home() {
  const image = require("../assets/BackgroundImage.jpg");

  return (
    <View style={styles.screen}>
      <ImageBackground source={image} style={styles.imageBg}>
        <View style={styles.container}>
          <DefaultText style={styles.startTrainingText}>
            Começar treino
          </DefaultText>
          <StartButton style={{ backgroundColor: Colors.secondaryColor }} />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;
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

  startTrainingText: {
    paddingTop: -20,
    paddingBottom: 20,
    color: Colors.primaryColor,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});
