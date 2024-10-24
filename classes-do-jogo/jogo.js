class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'uma espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'um golpe fatal';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }
        console.log(`O ${this.tipo}, ${this.nome}, atacou usando ${ataque}`);
    }
}


const mago = new Hero('Gandalf', 1000, 'mago');
mago.atacar();

const guerreiro = new Hero('Conan', 30, 'guerreiro');
guerreiro.atacar();

const monge = new Hero('Aang', 112, 'monge');
monge.atacar();

const ninja = new Hero('Naruto', 17, 'ninja');
ninja.atacar();
