import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router para la navegación

@Component({
  selector: 'app-metodo-pago',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.css']
})
export class MetodoPagoComponent {
  nombre: string = '';
  apellido: string = '';
  ciudad: string = '';
  codigoPostal: string = '';
  pais: string = '';
  numeroTarjeta: string = '';
  cvv: string = '';
  montoAPagar: string = '';

  constructor(private router: Router) {} // Inyectar Router

  regresar() {
    this.router.navigate(['/servicio']); // Navegar de vuelta a la página de servicio
  }

  pagar() {
    // Implementa la lógica para procesar el pago
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Ciudad:', this.ciudad);
    console.log('Código Postal:', this.codigoPostal);
    console.log('País:', this.pais);
    console.log('Número de tarjeta:', this.numeroTarjeta);
    console.log('CVV:', this.cvv);
    console.log('Monto a Pagar:', this.montoAPagar);
  }
}
