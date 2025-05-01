export abstract class Instrumento {
    protected nombre: string;
    protected tipo: string;
  
    constructor(pNombre: string, pTipo?: string) {
      this.nombre = pNombre;
      this.tipo = pTipo ?? "Desconocido";
    }
  
    public setTipo(pTipo: string): void {
      this.tipo = pTipo;
    }
  
    public getTipo(): string {
      return this.tipo;
    }
  
    public abstract tocar(): void;
  
    public getdescripcion(): string {
      return `${this.nombre} (${this.tipo})`;
    }
  }