import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import {
  Avatar,
  Button,
  Icon,
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import Timer from "../components/Timer";
import ExitConfirmation from "../Alerts/ExitConfirmation";
const image2 = require("../assets/workout.jpg");

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const TrainingScreen = ({ route, navigation }) => {
  const navigateBack = () => {
    ExitConfirmation();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  // Obter o ID do treino que vamos realizar
  const { trainId } = route.params;

  return (
    <Layout style={{ flex: 1 }}>
      <TopNavigation
        style={{ minHeight: 100 }}
        title={JSON.stringify(trainId)}
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={styles.container} level="1">
        <View style={styles.imageContainer}>
          <Image style={styles.trainingImage} source={image2}></Image>
        </View>

        <Layout style={styles.contentContainer} level="2">
          <Text style={styles.titleTrain}>
            Ponte id: {JSON.stringify(trainId)}
          </Text>
          <Divider />
          <Text style={styles.contentText}>
            Deite-se de bruços no chão, numa superfície plana. Levante o corpo
            apoiando-se sobre as pontas dos pés e os antebraços (mantendo-os
            paralelos, à frente da cabeça). Todo o corpo deve permanecer
            suspenso, formando uma espécie de triângulo retângulo.
          </Text>
          <Timer tempoRestante="30"></Timer>
        </Layout>
        <Divider />
        <Button status="info" onPress={() => navigation.push("Rest")}>
          Próximo
        </Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  trainingImage: {
    resizeMode: "contain",
    width: 500,
    height: 350,
  },
  headerContainer: {
    alignItems: "center",
    minHeight: 256,
    paddingVertical: 24,
  },
  titleTrain: {
    fontSize: 30,
    fontWeight: "bold",
  },

  contentContainer: {
    flex: 1,
    padding: 24,
  },
  contentText: {
    marginTop: 20,
    fontSize: 16,
    flexWrap: "wrap",
  },
});
