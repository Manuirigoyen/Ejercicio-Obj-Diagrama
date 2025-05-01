import { Instrumento } from "./instrumento";

export class Flauta extends Instrumento {
  private material: string;

  constructor(pNombre: string, pMaterial: string) {
    super(pNombre, "Viento");
    this.material = pMaterial;
  }

  public tocar(): void {
    console.log(`${this.nombre} de ${this.material} está tocando una melodía suave.`);
  }
}