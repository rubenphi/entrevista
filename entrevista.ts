function entrevista(texto:string): string{
  return texto
}

function descuentoCompra(valor:number ): number{
  
  if(valor >= 100000) {
    return valor * 0.50;
  }
  if(valor >= 50000){
    return valor * 0.80;
  }
  return valor

}
export { entrevista, descuentoCompra }
