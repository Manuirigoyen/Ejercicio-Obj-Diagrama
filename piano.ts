import { Instrumento } from "./instrumento";

export class Piano extends Instrumento {
  private cantTeclas: number;

  constructor(pNombre: string, pCantTeclas: number) {
    super(pNombre, "Cuerda percutida");
    this.cantTeclas = pCantTeclas;
  }

  public setCantTeclas(pNum: number): void {
    this.cantTeclas = pNum;
  }

  public getCantTeclas(): number {
    return this.cantTeclas;
  }

  public tocar(): void {
    console.log(`${this.nombre} con ${this.cantTeclas} teclas está interpretando una sonata.`);
  }
}