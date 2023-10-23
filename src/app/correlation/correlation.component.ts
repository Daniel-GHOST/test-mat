import { Component } from '@angular/core';
import { A3testService } from '../services/a3test.service';
import { Calculate } from '../commons/calculate';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css']
})
export class CorrelationComponent {
  constructor(private servicio:A3testService){}
  data={
    x: [0],
    y: [0]
  }
  getTest1(){
    this.servicio.getTest1().subscribe((data:any)=>{
      this.data.x=data.proxy_size;
      this.data.y=data.actual_add;
    });
  }
  getTest2(){
    this.servicio.getTest2().subscribe((data:any)=>{
      this.data.x=data.proxy_size;
      this.data.y=data.actual_develop;
    });
  }
  getTest3(){
    this.servicio.getTest3().subscribe((data:any)=>{
      this.data.x=data.plan_added;
      this.data.y=data.actual_added;
    });
  }
  getTest4(){
    this.servicio.getTest4().subscribe((data:any)=>{
      this.data.x=data.plan_added;
      this.data.y=data.actual_develop;
    });
  }
  calculateR():number{
    let n=this.data.x.length;
    let XY=Calculate.sum_xy(this.data.x, this.data.y);
    let X=Calculate.sum(this.data.x);
    let suma_Y=Calculate.sum(this.data.y);
    let suma_X2=Calculate.sum_cuadrado(this.data.x);
    let suma_Y2=Calculate.sum_cuadrado(this.data.y);

    return ((n*XY)-(X*suma_Y))/Math.sqrt(((n*suma_X2)-(X*X))*((n*suma_Y2)-(suma_Y*suma_Y)));
  }
  calculateR2():number{
    return Math.pow(this.calculateR(), 2)
  }
}
