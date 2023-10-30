import { SimpsonRule } from './../commons/simpson_rule';
import { Component } from '@angular/core';
@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  calcular(opcion:any, x0:number, x1:number, seg:number, error:number){
    if((opcion==0) || x1==0){
      return 0;
    }else{
      let area1=0;
      let area2=0;
      let contador=1;
      while(area1==0||area2-area1>error||area2==0){

        if(contador==1){
          area1=SimpsonRule.simpson(opcion, seg, x0, x1);
        }else{
          if(area2!=0){
          area1=area2;
          }
          seg*=2;
          area2=SimpsonRule.simpson(opcion, seg, x0, x1);
        }
        contador+=1;
      }
      return area2
    }
  }
}
