import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Divider, Text } from "@ui-kitten/components";

const SettingsOption = (props) => {
  const { style, hint, children, ...touchableOpacityProps } = props;

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1.0}
        {...touchableOpacityProps}
        style={[styles.container, style]}
      >
        <Text category="s2">{hint}</Text>
        {children}
      </TouchableOpacity>
      <Divider />
    </View>
  );
};

export default SettingsOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
