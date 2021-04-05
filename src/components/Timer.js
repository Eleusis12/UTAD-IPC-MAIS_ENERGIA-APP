import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Divider, Text, Layout } from "@ui-kitten/components";
const Timer = (props) => {
  const { tempoRestante } = props;
  return (
    <View style={styles.container}>
      <View style={styles.outerRectangle}>
        <Text style={styles.timer}>
          TEMPO: {JSON.stringify(tempoRestante)}s
        </Text>
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  outerRectangle: {
    backgroundColor: "#6690FF",
    borderWidth: 3,
    borderRadius: 15,
    marginTop: 40,
    padding: 5,
  },
  timer: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
