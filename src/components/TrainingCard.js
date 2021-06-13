import React, { ReactElement, useState } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { Button, Input, Text, Icon, Layout, Card } from "@ui-kitten/components";

const TrainingCard = (props) => {
	const { exercise } = props;

	const Header = (props) => (
		<View {...props}>
			<Text category="h6">Ponte</Text>
			<Text category="s1">Exercita os Abodiminais</Text>
		</View>
	);

	return (
		// <View style={styles.container}>
		//   <ImageBackground style={styles.image} source={image}>
		//     <Card style={styles.card} header={Header}></Card>
		//   </ImageBackground>
		// </View>

		<Layout style={styles.container} level="1">
			<ImageBackground style={styles.image} source={exercise.image}>
				<Text style={styles.titleLabel} category="h4">
					{exercise.name}
				</Text>
				<Text style={styles.descriptionLabel} category="s1">
					{exercise.desc}
				</Text>
				<Text style={styles.contentLabel}>{exercise.id}</Text>
				<View style={styles.authoringContainer}>
					<Text appearance="hint" category="p2">
						Exercita: Abdominais
					</Text>
				</View>
			</ImageBackground>
		</Layout>
	);
};

export default TrainingCard;

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	image: {
		height: 180,
		opacity: 1,
	},
	titleLabel: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#9C27B0",
		textShadowColor: "black",
		textShadowRadius: 1,
		textShadowOffset: {
			width: -0.5,
			height: -0.5,
		},

		marginHorizontal: 24,
		marginVertical: 16,
	},
	descriptionLabel: {
		margin: 24,
		textShadowColor: "black",
		textShadowRadius: 1,
		textShadowOffset: {
			width: -0.5,
			height: -0.5,
		},
		fontSize: 20,
	},
	contentLabel: {
		margin: 24,
	},
	authoringContainer: {
		flexDirection: "row",
		marginHorizontal: 24,
	},
	dateLabel: {
		marginHorizontal: 8,
	},
	commentInputLabel: {
		fontSize: 16,
		marginBottom: 8,
		color: "black",
	},
	commentInput: {
		marginHorizontal: 24,
		marginTop: 24,
		marginBottom: 20,
	},
});
