class Hero {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
        this.ataque = this.definirAtaque(); 
    }

    definirAtaque() {
        switch (this.tipo) {
            case "guerreiro":
                return "espada";
            case "mago":
                return "magia";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
            default:
                return "ataque desconhecido";
        }
    }

    toString() {
        return `O ${this.nome} atacou usando ${this.ataque}`;
    }
}

let heroi1 = new Hero("Ninja Master", "ninja");
console.log(heroi1.toString());
