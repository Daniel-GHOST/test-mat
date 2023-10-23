import { Calculate } from './../commons/calculate';
import { MediaComponent } from '../media/media.component';
import { A3testService } from './../services/a3test.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent {
  constructor(private servicio:A3testService, private promedio:MediaComponent){}
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
  calculateB0():number{
    let promedioX=this.promedio.media(this.data.x);
    let promedioY=this.promedio.media(this.data.y);
    return promedioY-(this.calculateB1()*promedioX);
  };
  calculateB1():number{
    let sumaXY=Calculate.sum_xy(this.data.x, this.data.y);
    let promedioX=this.promedio.media(this.data.x);
    let promedioY=this.promedio.media(this.data.y);
    let sumaX2=Calculate.sum_cuadrado(this.data.x);
    let n=this.data.x.length;
    return (sumaXY-(n*promedioX*promedioY))/(sumaX2-(n*promedioX*promedioX));
  };
  calculateY(x:number):number{
    return (this.calculateB1()*x)+this.calculateB0();
  };
}
