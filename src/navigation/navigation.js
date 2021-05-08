import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home";
import { TrainingScreen } from "../screens/Training";
import { SettingsScreen } from "../screens/Settings";
import { PersonalFormScreen } from "../screens/PersonalForm";
import { ListTrainingsScreen } from "../screens/ListTrainings";
import { RestScreen } from "../screens/Rest";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="ListTrainings" component={ListTrainingsScreen} />
    <Screen name="Rest" component={RestScreen} />
    <Screen name="PersonalForm" component={PersonalFormScreen} />
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Training" component={TrainingScreen} />
    <Screen name="Settings" component={SettingsScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
