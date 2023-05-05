import { Component, Input } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent {
  l:any ;
  b:any;
  h:any;
  
  
data1:any[]=[];
  submit(l:number,b:number,h:number){
    const area={
      l:this.l,
      b:this.b,
      h:this.h
      
    }
    this.data1.push(area)
}
AreaCalculated(event:any){
  const index= this.data1.findIndex(Area=>Area===event.Area);
  this.data1[index].area=event.area;
  alert('the area of the cube ' + event.area);
}
}
