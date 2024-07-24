class engendro {
    private nombre: string;
    private altura: number | undefined;
    private peso: number | undefined;

    constructor(nombre: string);
    constructor(nombre: string, altura: number);
    constructor(nombre: string, altura: number, peso: number)
    constructor(nombre: string, altura?: number, peso?: number) {
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }

    get nom() {
        return this.nombre;
    }
}

new engendro("pako");