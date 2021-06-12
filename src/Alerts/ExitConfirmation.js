import React, { BackHandler, Alert } from "react-native";

const ExitConfirmation = ({ navigation }) => {
	const navigateListExercise = () => {
		navigation.navigate("ListTrainings");
	};

	Alert.alert(
		"Sair do Treino",
		"Tens a certeza que queres terminar este treino",
		[
			{
				text: "Cancelar",
				onPress: () => {},
				style: "cancel",
			},
			{ text: "OK", onPress: navigateListExercise },
		]
	);
};

export default ExitConfirmation;
