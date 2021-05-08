import React, { ReactElement, useState } from "react";
import { StyleSheet, View, ImageBackground, FlatList } from "react-native";
import {
  Button,
  Input,
  Text,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import TrainingCard from "../components/TrainingCard";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

// Temos que retornar uma lista de exercícios que o idoso possa realizar
export const ListTrainingsScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateTraining = () => {
    navigation.navigate("Training", {
      trainId: 86,
    });
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <Layout style={styles.header} level="1">
      <TopNavigation
        style={{ minHeight: 30 }}
        alignment="center"
        title="Lista de Exercícios"
        accessoryLeft={BackAction}
      />
      <FlatList
        data={[{ key: "Devin" }, { key: "Dan" }]}
        renderItem={({ item }) => <TrainingCard>{item.key}</TrainingCard>}
      />
      <Button onPress={navigateTraining} status="info">
        Começar
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingBottom: 8,
  },
  list: {
    flex: 1,
  },
});
