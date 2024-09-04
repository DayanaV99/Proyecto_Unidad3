import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule


@NgModule({
  // Elimina ServicioComponent de declarations, ya que es standalone
  imports: [
    CommonModule,
    RouterModule,
   
  ],
  exports: [CommonModule,RouterModule]
})
export class ServicioModule { }
