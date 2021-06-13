import React, { ReactElement, useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Text, Icon, Layout } from "@ui-kitten/components";
import AsyncStorage from "@react-native-community/async-storage";
import { HomeScreen } from "../screens/Home";

export const PersonalFormScreen = ({ navigation }) => {
	const [age, setAge] = useState();
	const [weight, setWeight] = useState();
	const [height, setheight] = useState();

	async function SaveUserInfo() {
		const newUser = {
			age: age,
			height: height,
			weight: weight,
		};

		let userObj = [];

		userObj.push(newUser);

		await AsyncStorage.setItem("user", JSON.stringify(userObj))
			.then(() => {
				console.log("saved");
			})
			.catch(() => {
				console.log("Error");
			});
	}

	return (
		<Layout style={styles.container}>
			<View>
				<View style={styles.headerContainer}>
					<Text category="h1" status="control">
						+Energia
					</Text>
					<Text category="s1" status="control">
						Bem vindo ao +Energia
					</Text>
				</View>
			</View>
			<View style={styles.formContainer}>
				<Text style={styles.label}>Idade</Text>
				<Input
					status="danger"
					style={styles.input}
					placeholder="Insira a sua idade"
					keyboardType="numeric"
					value={age}
					onChangeText={setAge}
				/>
				<Text style={styles.label}>Peso</Text>

				<Input
					style={styles.input}
					placeholder="Insira o seu peso em quilogramas"
					keyboardType="numeric"
					value={weight}
					onChangeText={setWeight}
				/>
				<Text style={styles.label}>Altura</Text>

				<Input
					style={styles.input}
					placeholder="Insira a sua altura em centímetros"
					keyboardType="numeric"
					value={height}
					onChangeText={setheight}
				/>

				<Button
					status="info"
					onPress={() => {
						SaveUserInfo();
						navigation.push("Home", {
							trainId: Math.floor(Math.random() * 100),
						});
					}}
				>
					Guardar
				</Button>
			</View>
			<View styles={styles.quoteContainer}>
				<Text style={styles.quote}>
					Não perca mais um dia, comece já hoje a exercitar
				</Text>
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	label: {
		fontSize: 20,
		fontWeight: "bold",
	},
	headerContainer: {
		minHeight: 216,
		justifyContent: "center",
		alignItems: "center",
	},
	formContainer: {
		flex: 1,
		paddingHorizontal: 16,
	},
	input: {
		margin: 4,
		marginTop: 5,
		marginBottom: 20,
	},
	quoteContainer: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	quote: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
