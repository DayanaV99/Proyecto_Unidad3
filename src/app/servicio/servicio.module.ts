import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { ServicioComponent } from './servicio/servicio.component'; // Importa el componente standalone

@NgModule({
  // Elimina ServicioComponent de declarations, ya que es standalone
  imports: [
    CommonModule,
    RouterModule,
    ServicioComponent // Importa el componente standalone aquí
  ],
  exports: [ServicioComponent]
})
export class ServicioModule { }
