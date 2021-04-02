import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Layout, Toggle } from "@ui-kitten/components";
import SettingsOption from "../components/SettingsOption";

function Settings() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <Layout style={styles.container}>
      <Text>Ola mundo dsadsa </Text>
      <Text>Ola dasdasnkjldhaslkdj</Text>
      {/* <DefaultText style={styles.startTrainingText}>Começar treino</DefaultText> */}
      <SettingsOption style={styles.setting} hint="Tema da aplicação" />
      <SettingsOption style={styles.setting} hint="Vibrar ao premir" />
      <SettingsOption
        style={[styles.setting, styles.section]}
        hint="Notification"
      />
      <SettingsOption
        style={[styles.setting, styles.section]}
        hint="Ativar Som"
        onPress={toggleSound}
      >
        <SettingsOption style={styles.setting} hint="Sobre" />

        <SettingsOption
          style={[styles.setting, styles.section]}
          hint="Ajuda"
        ></SettingsOption>
        <Toggle checked={soundEnabled} onChange={toggleSound} />
      </SettingsOption>
    </Layout>
  );
}
export default Settings;
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
