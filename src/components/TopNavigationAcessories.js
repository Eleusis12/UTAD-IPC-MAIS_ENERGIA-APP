import React from "react";
import {
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { View, StyleSheet, Text } from "react-native";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const SettingsIcon = (props) => <Icon {...props} name="settings" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

const TopNavigationAccessories = (props) => {
  const {
    alignment,
    title,
    subtitle,
    accessoryLeft,
    accessoryRight,
    navigateSettings,
  } = props;
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => <TopNavigationAction icon={MenuIcon} />;

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={SettingsIcon} onPress={navigateSettings} />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem accessoryLeft={InfoIcon} title="Sobre a aplicação" />
        <MenuItem accessoryLeft={LogoutIcon} title="Sair" />
      </OverflowMenu>
    </React.Fragment>
  );
  const renderBackAction = () => <TopNavigationAction icon={BackIcon} />;

  return (
    <>
      <TopNavigation
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        alignment="center"
        title="+Energia"
        subtitle="Exercícios para o seu bem estar"
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
    </>
  );
};

export default TopNavigationAccessories;

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
  },
  topNavigation: {},
});
