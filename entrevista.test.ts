import { descuentoCompra, entrevista } from "./entrevista";


test('imprimir un dato', () => {
  let resultado:string = entrevista("hola");
  let esperado:string = "hola";
  expect(resultado).toBe(esperado);
});
test('aplicar descuento', () => {
  let resultado:number = descuentoCompra(50000);
  let esperado:number = 40000;
  expect(resultado).toBe(esperado);
});
