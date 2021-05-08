import React, { ReactElement, useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Button, Input, Text, Icon, Layout } from "@ui-kitten/components";

// Temos que retornar uma lista de exercícios que o idoso possa realizar
export const RestScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rest}>Descansa! </Text>
      <Text style={styles.text}>Ainda tens...</Text>
      <Text style={styles.timer}>00:25</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 180,
    flexDirection: "column",
    alignItems: "center",
  },
  rest: { fontSize: 50, fontWeight: "bold", color: "#fbac00" },
  text: { fontSize: 30, fontWeight: "bold", paddingTop: 100 },
  timer: { fontSize: 120, fontWeight: "bold" },
});
