import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicioModule } from '../servicio.module';
import { Router } from '@angular/router'; // Importar Router para la navegación

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule, ServicioModule],
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {

  // Lista de imágenes para el carrusel
  carouselImages: string[] = [
    '../../img/barco1.jpg',
    '../../img/barco2.jpg',
    '../../img/barco3.jpg',
    '../../img/barco4.jpg',
  ];

  currentImageIndex: number = 0;

  // Datos para la sección "Conoce nuestra flota"
  fleetItems = [
    { image: '../../img/yate.jpg', title: 'Yate de lujo' },
    { image: '../../img/lancha.jpg', title: 'Barco deportivo' },
    { image: '../../img/inflable.jpg', title: 'Bote inflable' },
    { image: '../../img/pesca.jpg', title: 'Barco de pesca' }
  ];

  // Datos para la sección "¡Embarcate hoy mismo!"
  rentalOptions = [
    {
      image: '../../img/yate1.jpg',
      title: 'YATE DE LUJO SUEÑO DORADO',
      description:'Vive un día de lujo y elegancia a bordo del YATE DE LUJO SUEÑO DORADO. Con comodidades y servicios de primera clase, ideal para celebraciones y eventos exclusivos en el mar',
      price: '$3,000 POR DÍA'
    },
    {
      image: '../../img/lancha1.jpg',
      title: 'VELOCIDAD SUPREMA',
      description: 'Experimenta la emoción y velocidad con "VELOCIDAD SUPREMA". Perfecta para los amantes de los deportes acuáticos y la adrenalina, esta lancha promete un día lleno de diversión.',
      price: '$600 POR DÍA'
    },
    {
      image: '../../img/velero3.jpg',
      title: 'RELAX SUPREMO',
      description: 'Disfruta de la estabilidad y el espacio de nuestros catamaranes. "RELAX SUPREMO" es ideal para familias y grupos que buscan relajarse con todas las comodidades en el agua.',
      price: '$800 POR DÍA'
    },
    {
      image: '../../img/pesca1.jpg',  
      title: 'CAMPEÓN DEL MAR',
      description: 'Equipado con todo para una jornada de pesca exitosa, "CAMPEÓN DEL MAR" es perfecto para los amantes de la pesca deportiva que buscan una experiencia completa. ¡Atrapa al pez más grande!',
      price: '$500 POR DÍA'
    },
    {
      image: '../../img/yate2.jpg',  
      title: 'REINA DEL OCEANO',
      description: 'Navega por el océano con estilo y lujo a bordo de la "REINA DEL OCEANO". Este yate ofrece una experiencia de navegación incomparable con elegantes comodidades y un diseño sofisticado.',
      price: '$2,500 POR DÍA'
    },
    {
      image: '../../img/lancha2.jpg', 
      title: 'TORNADO RÁPIDO',
      description: 'Experimenta la emoción y la velocidad en la "TORNADO RÁPIDO". Esta lancha rápida está diseñada para ofrecerte aventuras vertiginosas en el agua.',
      price: '$700 POR DÍA'
    },
    {
      image: '../../img/catamatran.jpg', 
      title: 'CATAMARÁN LUX',
      description: 'El "CATAMARÁN LUX" ofrece un espacio amplio y cómodo para grupos grandes que buscan disfrutar de un día en el agua con todas las comodidades de lujo.',
      price: '$900 POR DÍA'
    },
    {
      image: '../../img/pesca.jpg', 
      title: 'FISHER MANIA',
      description: 'La "FISHER MANIA" está equipada para los amantes de la pesca con todas las herramientas necesarias para una jornada exitosa en el mar.',
      price: '$550 POR DÍA'
    },
    {
      image: '../../img/velero2.jpg',  
      title: 'VELERO DE ENSUEÑO',
      description: 'Disfruta de una navegación tranquila y relajante a bordo del "VELERO DE ENSUEÑO". Perfecto para una escapada en el agua con elegancia y confort.',
      price: '$750 POR DÍA'
    },
    {
      image: '../../img/lancha.jpg',  
      title: 'LANCHA DE AVENTURA',
      description: 'La "LANCHA DE AVENTURA" está diseñada para los entusiastas de las aventuras en el agua, ofreciendo velocidad y diversión en cada viaje.',
      price: '$650 POR DÍA'
    }
  ];

  constructor(private router: Router) {} // Inyectar el Router

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
    }, 3000); // Cambia cada 3 segundos
  }

  // Método para redirigir a la página de método de pago
  goToMetodoPago() {
    this.router.navigate(['/metodo-pago']); // Navega a la ruta especificada
  }
}
