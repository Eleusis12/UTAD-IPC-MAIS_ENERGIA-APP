import React from "react";
import {
	CheckBox,
	View,
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import { Divider, Text } from "@ui-kitten/components";
import { Dropdown } from "react-native-material-dropdown-v2";

const DropdownSetting = (props) => {
	const {
		style,
		hint,
		children,
		values,
		valueChanged,
		label,
		selected,
		...touchableOpacityProps
	} = props;

	return (
		<View>
			<TouchableOpacity
				activeOpacity={1.0}
				{...touchableOpacityProps}
				style={[styles.container, style]}
			>
				<Text category="s2" style={{ fontSize: 25 }}>
					{hint}
				</Text>
				<Dropdown
					data={values}
					label={label}
					onChangeText={(item) => valueChanged(item)}
					containerStyle={{ width: 150 }}
					labelContainerStyle={{ backgroundColor: "#FFFFFF" }}
					pickerStyle={{ backgroundColor: "#FFFFFF" }}
					overlayStyle={{ backgroundColor: "#FFFFFF" }}
					value={selected}
					fontSize={20}
				></Dropdown>
				{children}
			</TouchableOpacity>

			<Divider />
		</View>
	);
};

export default DropdownSetting;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	checkbox: {
		alignSelf: "center",
	},
});
