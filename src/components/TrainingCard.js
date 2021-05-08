import React, { ReactElement, useState } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { Button, Input, Text, Icon, Layout, Card } from "@ui-kitten/components";

const TrainingCard = (props) => {
  const image = require("../assets/workout.jpg");

  const Header = (props) => (
    <View {...props}>
      <Text category="h6">Ponte</Text>
      <Text category="s1">Exercita os Abodiminais</Text>
    </View>
  );

  return (
    // <View style={styles.container}>
    //   <ImageBackground style={styles.image} source={image}>
    //     <Card style={styles.card} header={Header}></Card>
    //   </ImageBackground>
    // </View>

    <Layout style={styles.container} level="1">
      <ImageBackground style={styles.image} source={image}>
        <Text style={styles.titleLabel} category="h4">
          Ponte
        </Text>
        <Text style={styles.descriptionLabel} category="s1">
          Deite-se de bruços no chão, numa superfície plana. Levante o corpo
          apoiando-se sobre as pontas dos pés e os antebraços (mantendo-os
          paralelos, à frente da cabeça). Todo o corpo deve permanecer suspenso,
          formando uma espécie de triângulo retângulo.
        </Text>
        <Text style={styles.contentLabel}>3</Text>
        <View style={styles.authoringContainer}>
          <Text appearance="hint" category="p2">
            Exercita: Abdominais
          </Text>
        </View>
      </ImageBackground>
    </Layout>
  );
};

export default TrainingCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  image: {
    height: 180,
    opacity: 0.6,
  },
  titleLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9C27B0",

    marginHorizontal: 24,
    marginVertical: 16,
  },
  descriptionLabel: {
    margin: 24,
  },
  contentLabel: {
    margin: 24,
  },
  authoringContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
  },
  dateLabel: {
    marginHorizontal: 8,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: "black",
  },
  commentInput: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 20,
  },
});
