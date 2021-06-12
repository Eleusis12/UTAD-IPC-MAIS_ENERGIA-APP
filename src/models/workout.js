// Exemplo de model que guarda a informação relativamente aos exercícios a praticar
class Workout {
	constructor(id, nome, tempo, descricao, calorias) {
		this.id = id;
		this.nome = nome;
		this.tempo = tempo;
		this.descricao = descricao;
		this.calorias = calorias;
	}
}

export default Workout;
