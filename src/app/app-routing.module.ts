import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShapesComponent } from './shapes/shapes.component';
import { CubeComponent } from './cube/cube.component';

const routes: Routes = [
  {
    path:'Shapes',
    component: ShapesComponent
  },
  {
    path:'cubes',
    component:CubeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
