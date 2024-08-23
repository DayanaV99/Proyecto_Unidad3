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
  resenas = [
    { title: 'Excelente servicio', body: 'El servicio fue excelente, muy recomendable.', reviewerName: 'Juan Pérez', date: '2024-08-22', rating: 5 },
    { title: 'Buena experiencia', body: 'Todo salió como esperaba, buen servicio.', reviewerName: 'Ana López', date: '2024-08-21', rating: 4 },
    { title: 'Regular', body: 'El servicio estuvo bien, pero podría mejorar.', reviewerName: 'Carlos Gómez', date: '2024-08-20', rating: 3 },
    // Agrega más reseñas si es necesario
  ];

  newReview = {
    name: '',
    title: '',
    text: '',
    rating: 1
  };

  itemsPerPage = 3;
  currentPage = 0;

  addReview() {
    if (this.newReview.name && this.newReview.title && this.newReview.text && this.newReview.rating) {
      const newResena = {
        title: this.newReview.title,
        body: this.newReview.text,
        reviewerName: this.newReview.name,
        date: new Date().toISOString().split('T')[0],
        rating: this.newReview.rating
      };

      this.resenas.push(newResena);
      this.newReview = { name: '', title: '', text: '', rating: 1 };
    }
  }

  getPagedResenas() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.resenas.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.resenas.length / this.itemsPerPage);
    if (this.currentPage < totalPages - 1) {
      this.currentPage++;
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

  sendGmail() {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(this.email)}&su=Contacto desde el formulario&body=Nombre: ${encodeURIComponent(this.nombre)}%0D%0AMensaje: ${encodeURIComponent(this.mensaje)}`;
    window.open(gmailLink, '_blank');
  }

  sendHotmail() {
    const hotmailLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(this.email)}&subject=Contacto desde el formulario&body=Nombre: ${encodeURIComponent(this.nombre)}%0D%0AMensaje: ${encodeURIComponent(this.mensaje)}`;
    window.open(hotmailLink, '_blank');
  }
  
}
