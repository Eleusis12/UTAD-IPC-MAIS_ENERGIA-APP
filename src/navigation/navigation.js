import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home";
import { TrainingScreen } from "../screens/Training";
import { SettingsScreen } from "../screens/Settings";
import { PersonalFormScreen } from "../screens/PersonalForm";
import { ListTrainingsScreen } from "../screens/ListTrainings";
import { RestScreen } from "../screens/Rest";
import { CongratsScreen } from "../screens/Congrats";
import { ExerciseSettingsScreen } from "../screens/ExerciseSettings";
import AsyncStorage from "@react-native-community/async-storage";

const { Navigator, Screen } = createStackNavigator();

var settings;

async function tryLoadSettings() {
	savedSettings = await AsyncStorage.getItem("settings");
	settings = JSON.parse(savedSettings);

	if (!settings) {
		console.log("Settings Not Loaded");
		settings = {
			darkMode: false,
			daltonicMode: false,
			txtColor: "White",
			txtSize: 100,
		};
	} else {
		console.log("Settings Loaded");
	}
}

const updateSettings = (setting, value) => {
	console.log(settings);
	switch (setting) {
		case "darkMode":
			settings.darkMode = value;
			break;
		case "daltonicMode":
			settings.daltonicMode = value;
			break;
		case "textColor":
			settings.txtColor = value;
			break;
		case "textSize":
			settings.txtSize = value;
			break;
		default:
			break;
	}
	AsyncStorage.setItem("settings", JSON.stringify(settings)).then(() => {
		console.log("settings saved");
	});
};

tryLoadSettings();

/* async function UserExists() {
	const user = await AsyncStorage.getItem("user");

	const userObj = JSON.parse(user);

	if (userObj == null) {
		console.log("hey");
		return false;
	}
	console.log("hey2");
	return true;
} */

const HomeNavigator = () => (
	<Navigator headerMode="none">
		<Screen name="PersonalForm" component={PersonalFormScreen} />
		<Screen name="Home" component={HomeScreen} />
		<Screen name="ListTrainings" component={ListTrainingsScreen} />
		<Screen name="Training" component={TrainingScreen} />
		<Screen name="Rest" component={RestScreen} />
		<Screen name="Congrats" component={CongratsScreen} />
		<Screen name="Settings">
			{(props) => (
				<SettingsScreen
					{...props}
					settings={settings}
					updateCb={updateSettings}
				/>
			)}
		</Screen>
		<Screen name="ExerciseSettings" component={ExerciseSettingsScreen} />
	</Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<HomeNavigator />
	</NavigationContainer>
);
