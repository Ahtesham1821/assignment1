import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModule }       from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent {

@Input() Area:any;
@Output() AreaCalculated = new EventEmitter<any>();
calculateArea(){
  const area =this.Area.l*this.Area.b*this.Area.h;
  this.AreaCalculated.emit(
    {Area:this.Area,
      l:this.Area.l,
      b:this.Area.b,
      h:this.Area.h,
      area:area
    });

}

}
