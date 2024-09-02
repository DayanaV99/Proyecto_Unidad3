import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { ServicioComponent } from './servicio/servicio/servicio.component'; // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'metodo-pago', component: MetodoPagoComponent },
  { path: 'servicio', component: ServicioComponent } // Ruta para el componente Servicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
