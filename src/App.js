import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import Home from "./screens/Home";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

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
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Home />
    </ApplicationProvider>
  );
}
