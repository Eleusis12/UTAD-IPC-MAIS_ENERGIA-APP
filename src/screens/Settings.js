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

export const SettingsScreen = ({ settings, updateCb, navigation }) => {
	const [soundEnabled, setSoundEnabled] = useState(false);
	const [notificationsEnabled, setNotificationsEnabled] = useState(false);
	const [darkMode, setDarkModeEnabled] = useState(settings.darkMode);
	const [daltonicMode, setDaltonicModeEnabled] = useState(
		settings.daltonicMode
	);
	const [textColor, setTextColor] = useState(settings.txtColor);
	const [textSize, setTextSize] = useState(settings.txtSize);

	console.log(settings);

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
		updateCb("darkMode", !darkMode);
	};

	const toggleDaltonicMode = () => {
		setDaltonicModeEnabled(!daltonicMode);
		updateCb("daltonicMode", !daltonicMode);
	};

	const changeTextColor = (newColor) => {
		setTextColor(newColor);
		updateCb("textColor", newColor);
	};

	const changeTextSize = (newSize) => {
		setTextSize(newSize);
		updateCb("textSize", newSize);
	};

	const navigatePersonal = () => {
		navigation.push("PersonalForm");
	};

	const navigateExerciceSettings = () => {
		navigation.navigate("ExerciseSettings");
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	const sizes = [
		{ label: "100%", value: "100" },
		{ label: "75%", value: "75" },
		{ label: "50%", value: "50" },
		{ label: "25%", value: "25" },
	];

	const colors = [
		{ label: "Vermelho", value: "red" },
		{ label: "Azul", value: "blue" },
		{ label: "Verde", value: "green" },
		{ label: "Amarelo", value: "yellow" },
		{ label: "Branco", value: "white" },
		{ label: "Preto", value: "black" },
	];

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
				values={colors}
				valueChanged={changeTextColor}
				selected={settings.txtColor}
				label="Cor"
			/>

			<DropdownSetting
				style={styles.setting}
				hint="Tamanho da Letra"
				values={sizes}
				valueChanged={changeTextSize}
				selected={settings.txtSize}
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
