// Exemplo de model que guarda a informação relativamente aos exercícios a praticar
class Workout {
	constructor(id, nome, tempo, descricao, calorias, imagem) {
		this.id = id;
		this.nome = nome;
		this.tempo = tempo;
		this.descricao = descricao;
		this.calorias = calorias;
		this.imagem = imagem;
	}
}

export default Workout;
