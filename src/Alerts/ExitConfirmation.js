import React, { BackHandler, Alert } from "react-native";

const ExitConfirmation = (navigationHandler) => {
	Alert.alert(
		"Sair do Treino",
		"Tens a certeza que queres terminar este treino",
		[
			{
				text: "Cancelar",
				onPress: () => {},
				style: "cancel",
			},
			{
				text: "OK",
				onPress: () => navigationHandler(),
			},
		]
	);
};

export default ExitConfirmation;
