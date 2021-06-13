import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import {
	Avatar,
	Button,
	Icon,
	Divider,
	Layout,
	Text,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components";

import Timer from "../components/Timer";
import ExitConfirmation from "../Alerts/ExitConfirmation";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const TrainingScreen = ({ route, navigation }) => {
	const navigateBack = () => {
		ExitConfirmation(navigateToExerciseList);
	};

	const navigateToExerciseList = () => {
		navigation.navigate("ListTrainings");
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	const exList = route.params.exList;

	var currentIndex = route.params.index;

	return (
		<Layout style={{ flex: 1 }}>
			<TopNavigation
				style={{ minHeight: 100 }}
				title={JSON.stringify(exList[currentIndex].id)}
				alignment="center"
				accessoryLeft={BackAction}
			/>
			<Divider />
			<Layout style={styles.container} level="1">
				<View style={styles.imageContainer}>
					<Image
						style={styles.trainingImage}
						source={exList[currentIndex].image}
					></Image>
				</View>

				<Layout style={styles.contentContainer} level="2">
					<Text style={styles.titleTrain}>{exList[currentIndex].name}</Text>
					<Divider />
					<Text style={styles.contentText}>{exList[currentIndex].desc}</Text>
					<Timer
						tempoRestante={exList[currentIndex].time}
						isPaused={true}
					></Timer>
				</Layout>
				<Divider />
				<Button
					status="info"
					onPress={() =>
						navigation.push("Rest", { exList: exList, index: currentIndex })
					}
				>
					Próximo
				</Button>
			</Layout>
		</Layout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	imageContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	trainingImage: {
		resizeMode: "contain",
		width: 500,
		height: 350,
	},
	headerContainer: {
		alignItems: "center",
		minHeight: 256,
		paddingVertical: 24,
	},
	titleTrain: {
		fontSize: 30,
		fontWeight: "bold",
	},

	contentContainer: {
		flex: 1,
		padding: 24,
	},
	contentText: {
		marginTop: 20,
		fontSize: 16,
		flexWrap: "wrap",
	},
});
