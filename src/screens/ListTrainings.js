import React, { ReactElement, useState } from "react";
import {
	StyleSheet,
	View,
	ImageBackground,
	FlatList,
	ScrollView,
} from "react-native";
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
import Exercises from "../constants/Exercises";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const ExerciseList = [];

const ExerciseData = () => {
	while (ExerciseList.length < 2) {
		let randomIndex = Math.floor(Math.random() * Exercises.length);
		console.log(randomIndex);
		let exercise = Exercises[randomIndex];

		if (!ExerciseList.includes(exercise)) {
			console.log(exercise.nome);
			ExerciseList.push({
				id: exercise.id,
				name: exercise.nome,
				time: exercise.tempo,
				desc: exercise.descricao,
				calories: exercise.calorias,
				image: exercise.imagem,
			});
		}
	}
};

// Temos que retornar uma lista de exercícios que o idoso possa realizar
export const ListTrainingsScreen = ({ navigation }) => {
	const navigateBack = () => {
		navigation.goBack();
	};

	const navigateTraining = () => {
		navigation.navigate("Training", {
			exList: ExerciseList,
			index: 0,
		});
	};

	ExerciseData();

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	return (
		<ScrollView>
			<Layout style={styles.header} level="1">
				<TopNavigation
					style={{ minHeight: 30 }}
					alignment="center"
					title="Lista de Exercícios"
					accessoryLeft={BackAction}
				/>
				<FlatList
					data={ExerciseList}
					renderItem={({ item }) => (
						<TrainingCard exercise={item}></TrainingCard>
					)}
				/>
				<Button onPress={navigateTraining} status="info">
					Começar
				</Button>
			</Layout>
		</ScrollView>
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
