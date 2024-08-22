import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';

export const routes: Routes=[
  {path: '', redirectTo: '/inicio',pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }