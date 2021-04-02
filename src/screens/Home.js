import React from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";

import StartButton from "../components/StartButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";

import { Layout, Text, Divider, TopNavigation } from "@ui-kitten/components";

export const HomeScreen = ({ navigation }) => {
  const image = require("../assets/BackgroundImage.jpg");

  const buttonClickedHandler = () => {
    console.log("Carregaste no botão");
    // do something
  };

  // Navega para o primeiro treino
  const navigateTraining = () => {
    navigation.navigate("Training", {
      trainId: 86,
    });
  };
  console.log(navigateTraining);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="+Energia" alignment="center" />
      <Divider />
      <Layout style={styles.screen}>
        <ImageBackground source={image} style={styles.imageBg}>
          <View style={styles.container}>
            <DefaultText style={styles.startTrainingText}>
              Começar treino
            </DefaultText>
            <StartButton
              startButtonHandler={navigateTraining}
              style={{ backgroundColor: Colors.secondaryColor }}
            />
          </View>
        </ImageBackground>
      </Layout>
    </SafeAreaView>
  );
};

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
