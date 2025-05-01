import { Orquesta } from "./orquesta"
import { Piano } from "./piano";
import { Flauta } from "./flauta";
import { Violin } from "./violin";

let orquesta = new Orquesta();


//Pruebas:::

// Crear instrumentos
let piano = new Piano("Yamaha Grand", 230);
let flauta = new Flauta("Flauta traversa", "Metal");
let violin = new Violin("Stradivarius", 4);

// Afinar violín
violin.afinar();

// Agregar a la orquesta
orquesta.setInstrumento(piano);
orquesta.setInstrumento(flauta);
orquesta.setInstrumento(violin);
console.log(orquesta.getInstrumentos());

// Ejecutar orquesta
console.log("La orquesta comienza a tocar:");
orquesta.ejecutarOrquesta();

//Tipo de instrumento
console.log(piano.getTipo());
console.log(flauta.getTipo());
console.log(violin.getTipo());

// Descripción de instrumentos
console.log(piano.getdescripcion());
console.log(flauta.getdescripcion());
console.log(violin.getdescripcion());