import React, { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import { Divider, Text, Layout } from "@ui-kitten/components";
const Timer = (props) => {
	const { tempoRestante } = props;
	const { isPaused } = props;

	let [timeLeft, countDown] = useState(tempoRestante);
	let [onPause, togglePause] = useState(isPaused);

	useEffect(() => {
		const id = setTimeout(() => {
			if (!onPause) {
				if (timeLeft > 0) {
					countDown(timeLeft - 1);
				}
			} else {
				togglePause(onPause);
			}
		}, 1000);
		return () => {
			clearTimeout(id);
		};
	}, [timeLeft, onPause]);

	return (
		<View style={styles.container}>
			<View style={styles.outerRectangle}>
				<Text
					style={styles.timer}
					onPress={() => {
						togglePause(!onPause);
					}}
				>
					TEMPO: {timeLeft}s
				</Text>
			</View>
		</View>
	);
};

export default Timer;

const styles = StyleSheet.create({
	container: {
		flex: 0.5,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	outerRectangle: {
		backgroundColor: "#6690FF",
		borderWidth: 3,
		borderRadius: 15,
		marginTop: 40,
		padding: 5,
	},
	timer: {
		fontSize: 30,
		fontWeight: "bold",
		color: "white",
	},
});
