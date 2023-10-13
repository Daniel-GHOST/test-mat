import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../services/proxy.service';
import { DevHoursService } from '../services/dev-hours.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  constructor(private service1:ProxyService, private service2:DevHoursService){};
  data1:number[]=[];
  data2:number[]=[];
  ngOnInit(): void {
    this.service1.getData().subscribe((data)=>{
      this.data1=data;
    });
    this.service2.getData().subscribe((data)=>{
      this.data2=data;
    });
  }
  getDataArray(x:number){
    if (x==1) {return this.data1} else {return this.data2}
  }
  media(dataarray:number[]){
    let suma=0;
    for(let i=0;i<dataarray.length;i++){
      suma+=dataarray[i];
    }
    return Number((suma/(dataarray.length)).toFixed(2));
  }
}
