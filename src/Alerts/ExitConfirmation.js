import React, { BackHandler, Alert } from "react-native";

const ExitConfirmation = () => {
  Alert.alert(
    "Sair do Treino",
    "Tens a certeza que queres terminar este treino",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Botão de cancelar pressionado"),
        style: "cancel",
      },
      { text: "OK", onPress: () => BackHandler.exitApp() },
    ]
  );
};

export default ExitConfirmation;
