import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const startButton = (props) => {
  // Ação a tomar quando carrega no botão

  const { startButtonHandler } = props;

  console.log(startButtonHandler);

  return (
    <TouchableOpacity
      onPress={startButtonHandler}
      style={[styles.startTraining, props.style]}
    >
      <FontAwesome5 name="dumbbell" size={72} color="black" />
    </TouchableOpacity>
  );
};

export default startButton;

const styles = StyleSheet.create({
  startTraining: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "blue",
  },
});
