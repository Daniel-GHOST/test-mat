export class Calculate{
  static sum(array:number[]):number{
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
  }
  static sum_cuadrado(array:number[]):number{
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      sum += array[i] * array[i];
    }
    return sum;
  }
  static sum_xy(x:number[], y:number[]):number{
    let sum = 0;
    for(let i = 0; i < x.length; i++){
      sum += x[i] * y[i];
    }
    return sum;
  }
}
