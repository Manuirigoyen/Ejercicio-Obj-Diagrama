import { Instrumento } from "./instrumento";
import { SeAfina } from "./seAfina";

export class Violin extends Instrumento implements SeAfina {
  private cantCuerdas: number;

  constructor(pNombre: string, pCantCuerdas: number) {
    super(pNombre, "Cuerda frotada");
    this.cantCuerdas = pCantCuerdas;
  }

  public setCantCuerdas(pNum: number): void {
    this.cantCuerdas = pNum;
  }

  public getCantCuerdas(): number {
    return this.cantCuerdas;
  }

  public tocar(): void {
    console.log(`${this.nombre} con ${this.cantCuerdas} cuerdas está tocando un solo.`);
  }

  public afinar(): void {
    console.log(`${this.nombre} está afinando sus cuerdas.`);
  }
}