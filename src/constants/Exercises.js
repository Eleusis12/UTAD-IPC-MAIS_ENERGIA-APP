import Workout from "../models/workout";

export default [
	new Workout(
		1,
		"Exercício com bastão",
		30,
		"Segurar o bastão ao nível da cintura escapular com as palmas das mãos viradas para baixo. De seguida, elevar os membros superiores em extensão por cima da cabeça",
		150,
		require("../assets/bastao.jpg")
	),
	new Workout(
		2,
		"Exercício com bola",
		45,
		"Segurar a bola ao nível do peito. De seguida, lançar a bola ao ar e agarrar a mesma com as duas mãos",
		70,
		require("../assets/bola.jpg")
	),
	new Workout(
		3,
		"Exercício com cadeira",
		20,
		"De pé com os apoios à largura dos ombros e as mãos apoiadas no encosto da cadeira, afastar lateral e alternadamente os membros inferiores",
		50,
		require("../assets/cadeira.jpg")
	),
	new Workout(
		4,
		"Exercício com halteres",
		25,
		"Sentado com o tronco imóvel, fletir e extender os membros superiores",
		35,
		require("../assets/halteres.jpg")
	),
];
