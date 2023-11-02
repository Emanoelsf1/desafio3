// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('mestre dos magos', 50, 'mago');
const heroi2 = new Heroi('kratos', 1000, 'guerreiro');
const heroi3 = new Heroi(' jackie chan',  500, 'ninja');
const heroi4 = new Heroi('scorpion', 3000, 'ninja');

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();