import React, { ReactElement, useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Button, Input, Text, Icon, Layout, Card } from "@ui-kitten/components";

const TrainingCard = (props) => {
  const image = require("../assets/workout.jpg");

  console.log(image2);

  //   const Header = (props) => (
  //     <View {...props}>
  //       <Text category="h6">Nome do Exercício</Text>
  //       <Text category="s1">Musculação</Text>
  //     </View>
  //   );

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground> */}
      {/* <Card style={styles.card} header={Header}>
        <Text>
          The Maldives, officially the Republic of Maldives, is a small country
          in South Asia, located in the Arabian Sea of the Indian Ocean. It lies
          southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from
          the Asian continent
        </Text>
      </Card> */}
    </View>
  );
};

export default TrainingCard;

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    margin: 2,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});
