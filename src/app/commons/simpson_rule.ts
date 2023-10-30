export class SimpsonRule{
  static simpson(opcion:number,segmentos:any, x0:any, x1:any){
    let w=(x1-x0)/segmentos
    let multiplo=0;
    var cal=this.opcion(opcion, x0)
    let suma=x0==0?0:(cal*=cal<0?-1:1);
    for(let i=1; i<=segmentos; i++){
      if(i==segmentos){
        suma+=this.opcion(opcion, x1);
      }else{
        if(i%2!=0){
          multiplo=4;
        }else{
          multiplo=2;
        }
        cal=this.opcion(opcion,((w*i)+x0))
        if(cal<0){
          cal*=-1
        }
        suma+=multiplo*cal
      }
    }
    return ((w/3)*suma);
  }

  static X2(x:number):number{
    return(x*x);
  }
  static test2X(x:number):number{
    return(2*x);
  }
  static test1_X(x:number):number{
    return(1/x);
  }

  static opcion(opcion:number,x:number):number{
    let valor;
    valor = 0;
    switch(opcion){
      case 1:
        valor=SimpsonRule.test2X(x);
        break;
      case 2:
        valor=SimpsonRule.X2(x);
        break;
      case 3:
        valor=SimpsonRule.test1_X(x);
    }
    return valor;
  }
}
