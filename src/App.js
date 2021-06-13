import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./navigation/navigation";

import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Training from "./screens/Training";
import AsyncStorage from "@react-native-community/async-storage";
import Exercises from "./constants/Exercises";

export default function App() {
	// Usar as seguintes fonts
	// TODO: Escolher fonts mais fáceis de visualizar
	let [fontsLoaded] = useFonts({
		Inter_900Black,
	});

	AsyncStorage.clear();

	// Se a font ainda não carregou
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<>
			<StatusBar />
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={eva.dark}>
				<AppNavigator />
			</ApplicationProvider>
		</>

		// <ApplicationProvider {...eva} theme={eva.dark}>
		//   {/* <Home startButtonHandler={buttonClickedHandler} /> */}
		//   {/* <Settings></Settings> */}
		//   <Training></Training>
		// </ApplicationProvider>
	);
}
