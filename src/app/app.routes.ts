import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio/servicio.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';

export const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicio', component: ServicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path:'metodo-pago', component: MetodoPagoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
  
];
