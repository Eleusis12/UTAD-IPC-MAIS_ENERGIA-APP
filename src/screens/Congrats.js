import React, { ReactElement, useState } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { Button, Input, Text, Icon, Layout } from "@ui-kitten/components";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// Temos que retornar uma lista de exercícios que o idoso possa realizar
export const CongratsScreen = ({ navigation }) => {
	return (
		<Layout style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.congrats}>Parabéns! </Text>
				<Text style={styles.text}>
					Conseguiste concluir o treino. Ficamos à sua espera amanhã para o
					próximo treino
				</Text>
			</View>
			<View style={styles.resultTraining}>
				<View style={styles.columnResultTraining}>
					<Text style={styles.labelResultTraining}> Calorias</Text>
					<FontAwesome5 name="fire" size={50} color="black" />
					<Text style={styles.valueResultTraining}>168</Text>
				</View>
				<View style={styles.columnResultTraining}>
					<Text style={styles.labelResultTraining}> Tempo</Text>
					<Ionicons name="timer" size={50} color="black" />
					<Text style={styles.valueResultTraining}>168</Text>
				</View>
			</View>
			<Button status="info" onPress={() => navigation.push("Home")}>Finalizar</Button>
		</Layout>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1 },
	header: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	congrats: { fontSize: 50, fontWeight: "bold", color: "#fbac00" },
	text: {
		fontSize: 30,
		fontWeight: "bold",
		paddingTop: 100,
	},
	timer: { fontSize: 120, fontWeight: "bold" },
	resultTraining: {
		flex: 1,
		paddingTop: 40,
		flexDirection: "row-reverse",
		justifyContent: "space-between",
	},
	columnResultTraining: {
		width: "50%",
		alignItems: "center",
	},
	labelResultTraining: { fontSize: 30 },
	valueResultTraining: { fontSize: 20, fontWeight: "bold" },
});
