import React, { ReactElement, useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Button, Input, Text, Icon, Layout } from "@ui-kitten/components";
import Timer from "../components/Timer";

export const RestScreen = ({ route, navigation }) => {
	const exList = route.params.exList;
	var nextIndex = route.params.index;
	nextIndex++;

	return (
		<View style={styles.container}>
			<Text style={styles.rest}>Descansa! </Text>
			<Text style={styles.text}>Ainda tens...</Text>
			<Timer tempoRestante={25} isPaused={true}></Timer>
			<Button
				status="info"
				onPress={() => {
					if (nextIndex < exList.length) {
						navigation.push("Training", {
							exList: exList,
							index: nextIndex,
						});
					} else {
						navigation.push("Congrats", { exList: route.params.exList });
					}
				}}
			>
				Próximo
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#4b4b4b",
	},
	rest: {
		marginTop: 180,
		fontSize: 50,
		fontWeight: "bold",
		color: "#fbac00",
	},
	text: { fontSize: 30, fontWeight: "bold", paddingTop: 100 },
	timer: { fontSize: 120, fontWeight: "bold" },
});
