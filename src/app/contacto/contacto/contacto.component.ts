import { Component } from '@angular/core';
import { ContactoModule } from '../contacto.module';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ContactoModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  // Reseñas predeterminadas para guardar en local storage
  defaultResenas = [
    { title: 'Excelente servicio', body: 'El servicio fue excelente, muy recomendable.', reviewerName: 'Juan Pérez', date: '2024-08-22', rating: 5 },
    { title: 'Buena experiencia', body: 'Todo salió como esperaba, buen servicio.', reviewerName: 'Ana López', date: '2024-08-21', rating: 4 },
    { title: 'Regular', body: 'El servicio estuvo bien, pero podría mejorar.', reviewerName: 'Carlos Gómez', date: '2024-08-20', rating: 3 }
  ];

  // Carga las reseñas desde localStorage si existen, si no, utiliza las reseñas predeterminadas
  resenas = JSON.parse(localStorage.getItem('resenas') || JSON.stringify(this.defaultResenas));

  // Objeto para almacenar la nueva reseña temporalmente antes de agregarla
  newReview = {
    name: '',  
    title: '',  
    text: '',  
    rating: 1  
  };
 
  // Configuración para la paginación de las reseñas
  itemsPerPage = 3;  // Número de reseñas por página
  currentPage = 0;  // Página actual, comenzando desde la primera (0)
 
  // Método para agregar una nueva reseña al array y guardar en localStorage
  addReview() {
    // Verifica que todos los campos de la nueva reseña estén completos
    if (this.newReview.name && this.newReview.title && this.newReview.text && this.newReview.rating) {
      // Crea un nuevo objeto de reseña con los datos proporcionados
      const newResena = {
        title: this.newReview.title,  
        body: this.newReview.text, 
        reviewerName: this.newReview.name,  
        date: new Date().toISOString().split('T')[0],  // Fecha actual en formato ISO (AAAA-MM-DD)
        rating: this.newReview.rating  
      };
 
      // Agrega la nueva reseña al array de reseñas
      this.resenas.push(newResena);
 
      // Guarda el array actualizado de reseñas en localStorage
      localStorage.setItem('resenas', JSON.stringify(this.resenas));
 
      // Reinicia el formulario para la siguiente entrada
      this.newReview = { name: '', title: '', text: '', rating: 1 };
    }
  }
 
  // Método para obtener las reseñas que se mostrarán en la página actual
   getPagedResenas() {
    const start = this.currentPage * this.itemsPerPage; // Índice de inicio para el slice
    const end = start + this.itemsPerPage; // Índice final para el slice
    return this.resenas.slice(start, end); // Retorna las reseñas correspondientes a la página actual
   }
 
  // Método para ir a la página anterior de reseñas, si existe
   previousPage() {
    if (this.currentPage > 0) { // Verifica que no esté en la primera página
      this.currentPage--; // Disminuye el número de página en 1
    }
   }
 
  // Método para ir a la página siguiente de reseñas, si existe
   nextPage() {
    const totalPages = Math.ceil(this.resenas.length / this.itemsPerPage); // Calcula el total de páginas
    if (this.currentPage < totalPages - 1) { // Verifica que no esté en la última página
      this.currentPage++; // Aumenta el número de página en 1
    }
  }
 

  //Databinding
  direccion: string = 'Calle Principal, Ciudad, País';
  telefono: string = '+123 456 7890';
  email: string = 'info@alquilerdebarcos.com';
  mensajeDudas: string = 'Puedes contactarnos para cualquier consulta, estaremos encantados de ayudarte.';
  defaultEmail: string = 'info@alquilerdebarcos.com'; 

  //Envio por mailto
  nombre: string = '';
  mensaje: string = '';


  // Método para enviar un correo electrónico utilizando Gmail o Hotmail
     // Crea un enlace con los parámetros prellenados en el formulario y abre una nueva pestaña con el enlace
     
  sendGmail() {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(this.email)}&su=Contacto desde el formulario&body=Nombre: ${encodeURIComponent(this.nombre)}%0D%0AMensaje: ${encodeURIComponent(this.mensaje)}`;
    window.open(gmailLink, '_blank');
  }

  sendHotmail() {
    const hotmailLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(this.email)}&subject=Contacto desde el formulario&body=Nombre: ${encodeURIComponent(this.nombre)}%0D%0AMensaje: ${encodeURIComponent(this.mensaje)}`;
    window.open(hotmailLink, '_blank');
  }
  
}
