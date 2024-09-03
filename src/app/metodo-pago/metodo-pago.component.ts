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

  private registroCount: number = 0; // Contador de registros
  private registros: string[] = []; // Lista para almacenar los registros

  constructor(private router: Router) { } // Inyectar Router

  regresar() {
    this.router.navigate(['/servicio']); // Navegar de vuelta a la página de servicio
  }

  pagar() {
    // Implementa la lógica para procesar el pago
    const registro = `
    Nombre: ${this.nombre}
    Apellido: ${this.apellido}
    Ciudad: ${this.ciudad}
    Código Postal: ${this.codigoPostal}
    País: ${this.pais}
    Número de tarjeta: ${this.numeroTarjeta}
    CVV: ${this.cvv}
    Monto a Pagar: ${this.montoAPagar}`;

    // Añadir el registro a la lista
    this.registros.push(registro);

    // Incrementar el contador de registros
    this.registroCount++;

    // Descargar el archivo cada 2 registros
    if (this.registroCount % 2 === 0) {
      this.downloadFile();
    }

    // Limpiar los campos del formulario
    this.nombre = '';
    this.apellido = '';
    this.ciudad = '';
    this.codigoPostal = '';
    this.pais = '';
    this.numeroTarjeta = '';
    this.cvv = '';
    this.montoAPagar = '';
  }

  downloadFile() {
    // Generar el contenido del archivo con todos los registros almacenados
    const data = this.registros.join('\n\n');

    // Crear un Blob con el contenido del archivo
    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    // Crear una URL para el Blob
    const url = window.URL.createObjectURL(blob);
    // Crear un enlace temporal
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Datos.txt'; // Nombre del archivo a descargar
    // Añadir el enlace al DOM
    document.body.appendChild(a);
    // Simular el clic en el enlace para iniciar la descarga
    a.click();
    // Limpiar la URL y el enlace
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}
