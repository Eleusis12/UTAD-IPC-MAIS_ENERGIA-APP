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

const image2 = require("../assets/workout.jpg");

const BackIcon = (props, { navigation }) => (
  <Icon {...props} name="arrow-back" />
);

export const TrainingScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Treino"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.trainingImage} source={image2}></Image>
        </View>

        <Layout style={styles.contentContainer} level="1">
          <Text>Ponte</Text>
          <Text>
            Deite-se de bruços no chão, numa superfície plana. Levante o corpo
            apoiando-se sobre as pontas dos pés e os antebraços (mantendo-os
            paralelos, à frente da cabeça). Todo o corpo deve permanecer
            suspenso, formando uma espécie de triângulo retângulo.
          </Text>
        </Layout>
        <Divider />
        <Button style={styles.button} status="info">
          Próximo
        </Button>
      </Layout>
    </SafeAreaView>
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

  contentContainer: {
    flex: 1,
    padding: 24,
  },
});
