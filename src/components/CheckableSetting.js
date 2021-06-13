import React from "react";
import {
	CheckBox,
	View,
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import { Divider, Text } from "@ui-kitten/components";

const CheckableSetting = (props) => {
	const {
		style,
		hint,
		children,
		isSelected,
		setSelection,
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
				<CheckBox
					value={isSelected}
					onValueChange={setSelection}
					style={styles.checkbox}
					tintColors={{ true: "#FFFFFF", false: "FFFFFF" }}
				></CheckBox>
				{children}
			</TouchableOpacity>

			<Divider />
		</View>
	);
};

export default CheckableSetting;

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
