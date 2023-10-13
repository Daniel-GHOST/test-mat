import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../services/proxy.service';
import { DevHoursService } from '../services/dev-hours.service';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent implements OnInit{
  constructor(private service1:ProxyService, private service2:DevHoursService, private media:MediaComponent){}
  data1:number[]=[]
  data2:number[]=[]
  ngOnInit(): void {
    this.service1.getData().subscribe((data:any)=>{
      this.data1=data;
    });
    this.service2.getData().subscribe((data:any)=>{
      this.data2=data;
    });
  }

  desvest(entrada:number[]){
    let media=this.media.media(entrada);
    let sumatoria=0;
    for(let i=0;i<entrada.length;i++){
      sumatoria+=Math.pow(entrada[i]-media,2);
    }
    return Number((Math.sqrt(sumatoria/(entrada.length-1))).toFixed(2));
  }
}
