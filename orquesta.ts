import { Instrumento } from "./instrumento";

export class Orquesta {
  private instrumentos: Instrumento[] = [];

  constructor() {}

  public ejecutarOrquesta(): void {
    for (let instrumento of this.instrumentos) {
      instrumento.tocar();
    }
  }

  public setInstrumento(pInstrumento: Instrumento): void {
    this.instrumentos.push(pInstrumento);
  }

  public getInstrumentos(): Instrumento[] {
    return this.instrumentos;
  }
}