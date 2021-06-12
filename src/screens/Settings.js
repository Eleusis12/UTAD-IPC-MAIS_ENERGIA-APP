import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import {
	Layout,
	Toggle,
	Icon,
	Divider,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components";
import SettingsOption from "../components/SettingsOption";
import CheckableSetting from "../components/CheckableSetting";
import DropdownSetting from "../components/DropdownSetting";
import { Button } from "react-native-paper";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
export const SettingsScreen = ({ navigation }) => {
	const [soundEnabled, setSoundEnabled] = useState(false);
	const [notificationsEnabled, setNotificationsEnabled] = useState(false);
	const [darkMode, setDarkModeEnabled] = useState(false);
	const [daltonicMode, setDaltonicModeEnabled] = useState(false);
	const [textColor, setTextColor] = useState("white");
	const [textSize, setTextSize] = useState(100);

	const toggleSound = () => {
		setSoundEnabled(!soundEnabled);
	};

	const toggleNotifications = () => {
		setNotificationsEnabled(!notificationsEnabled);
	};

	const navigateBack = () => {
		navigation.goBack();
	};

	const toggleDarkMode = () => {
		setDarkModeEnabled(!darkMode);
	};

	const toggleDaltonicMode = () => {
		setDaltonicModeEnabled(!daltonicMode);
	};

	const changeTextColor = (newColor) => {
		setTextColor(newColor);
	};

	const changeTextSize = (newSize) => {
		setTextSize(newSize);
	};

	const navigatePersonal = () => {
		navigation.navigate("PersonalForm");
	};

	const navigateExerciceSettings = () => {
		navigation.navigate("ExerciseSettings");
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	/* useEffect(() => {
		console.log(textColor);
		console.log(textSize);
		console.log(darkMode);
	}); */

	return (
		<Layout style={styles.container}>
			<TopNavigation
				style={{ minHeight: 100 }}
				title="Definições"
				alignment="center"
				accessoryLeft={BackAction}
			/>
			{/* <DefaultText style={styles.startTrainingText}>Começar treino</DefaultText> */}
			<CheckableSetting
				style={styles.setting}
				isSelected={darkMode}
				setSelection={toggleDarkMode}
				hint="Modo Escuro"
			/>
			<CheckableSetting
				style={styles.setting}
				isSelected={daltonicMode}
				setSelection={toggleDaltonicMode}
				hint="Modo Daltónico"
			/>

			<DropdownSetting
				style={styles.setting}
				hint="Cor da Letra"
				values={[
					{ label: "Vermelho", value: "red" },
					{ label: "Azul", value: "blue" },
					{ label: "Verde", value: "green" },
					{ label: "Amarelo", value: "yellow" },
					{ label: "Branco", value: "white", selected: true },
					{ label: "Preto", value: "black" },
				]}
				valueChanged={changeTextColor}
				label="Cor"
			/>
			<DropdownSetting
				style={styles.setting}
				hint="Tamanho da Letra"
				values={[
					{ label: "100%", value: "100" },
					{ label: "75%", value: "75" },
					{ label: "50%", value: "50" },
					{ label: "25%", value: "25" },
				]}
				valueChanged={changeTextSize}
				label="Tamanho"
			/>

			<SettingsOption style={[styles.setting, styles.section]} hint="Sobre" />
			<SettingsOption style={[styles.setting, styles.section]} hint="Ajuda" />

			<Button onPress={navigatePersonal}>
				Alterar características físicas
			</Button>
			<Button onPress={navigateExerciceSettings}>
				Definições de Exercícios
			</Button>
			{/* <SettingsOption
				style={[styles.setting, styles.section]}
				hint="Notificações"
				onPress={toggleNotifications}
			>
				<Toggle checked={notificationsEnabled} onChange={toggleNotifications} />
			</SettingsOption>
			<SettingsOption
				style={[styles.setting, styles.section]}
				hint="Ativar Som"
				onPress={toggleSound}
			>
				<Toggle checked={soundEnabled} onChange={toggleSound} />
			</SettingsOption> */}
		</Layout>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	setting: {
		padding: 16,
	},
	section: {
		paddingTop: 32,
	},
});
