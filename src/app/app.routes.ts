import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio/servicio.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';

export const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicio', component: ServicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];
