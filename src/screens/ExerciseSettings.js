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
import CheckableSetting from "../components/CheckableSetting";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
export const ExerciseSettingsScreen = ({ navigation }) => {
	const [lowerExercise, setLowerExercise] = useState(true);
	const [upperExercise, setUpperExercise] = useState(true);
	const [cardioExercise, setCardioExercise] = useState(true);
	const [yogaExercise, setYogaExercise] = useState(true);

	const navigateBack = () => {
		navigation.goBack();
	};

	const toggleLowerExercise = () => {
		setLowerExercise(!lowerExercise);
	};

	const toggleUpperExercise = () => {
		setUpperExercise(!upperExercise);
	};

	const toggleCardioExercise = () => {
		setCardioExercise(!cardioExercise);
	};

	const toggleYogaExercise = () => {
		setYogaExercise(!yogaExercise);
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

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
				isSelected={lowerExercise}
				setSelection={toggleLowerExercise}
				hint="Abaixo da cintura"
			/>
			<CheckableSetting
				style={styles.setting}
				isSelected={upperExercise}
				setSelection={toggleUpperExercise}
				hint="Acima da cintura"
			/>

			<CheckableSetting
				style={styles.setting}
				isSelected={cardioExercise}
				setSelection={toggleCardioExercise}
				hint="Cardio"
			/>
			<CheckableSetting
				style={styles.setting}
				isSelected={yogaExercise}
				setSelection={toggleYogaExercise}
				hint="Yoga"
			/>
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
