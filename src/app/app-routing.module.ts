import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './home/detalle/detalle.component';


const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },
  {
    path : '',
    component: HomeComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
