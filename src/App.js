import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import Home from "./screens/Home";

export default function App() {
  // Usar as seguintes fonts
  // TODO: Escolher fonts mais fáceis de visualizar
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  // Se a font ainda não carregou
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Home />;
}
