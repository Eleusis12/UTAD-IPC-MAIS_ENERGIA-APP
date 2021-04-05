import { Alert } from "react-native";

const ExitConfirmation = () => {
  Alert.alert(
    "Sair do Treino",
    "Tens a certeza que queres terminar este treino",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Botão de cancelar pressionado"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("Ok foi pressionado") },
    ]
  );
};

export default ExitConfirmation;
