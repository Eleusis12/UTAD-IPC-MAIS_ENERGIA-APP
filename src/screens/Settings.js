import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Layout, Toggle } from "@ui-kitten/components";
import SettingsOption from "../components/SettingsOption";

function Settings() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <Layout style={styles.container}>
      {/* <DefaultText style={styles.startTrainingText}>Começar treino</DefaultText> */}
      <SettingsOption style={styles.setting} hint="Tema da aplicação" />
      <SettingsOption style={styles.setting} hint="Vibrar ao premir" />

      <SettingsOption style={[styles.setting, styles.section]} hint="Sobre" />
      <SettingsOption style={[styles.setting, styles.section]} hint="Ajuda" />
      <SettingsOption
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
