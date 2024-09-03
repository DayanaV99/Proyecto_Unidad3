import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactoModule } from '../../contacto/contacto.module';

// Definimos el modelo de datos directamente en el componente
interface CardInfo {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ContactoModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']  
})
export class InicioComponent {
  cardInfos: CardInfo[] = [
    {
      imgSrc: '../../../../img/info1.jpg',
      altText: 'Salinas',
      title: 'Salinas',
      description: 'Salinas es una ciudad costera ubicada en la provincia de Santa Elena, Ecuador. Conocida por sus hermosas playas y su vibrante vida nocturna, Salinas es un destino turístico popular tanto para locales como para extranjeros. Sus principales atractivos incluyen la playa de Chipipe, el Malecón de Salinas, y la Puntilla de Santa Elena, un lugar perfecto para practicar deportes acuáticos y disfrutar del sol.'
    },
    {
      imgSrc: '../../../../img/info2.jpg',
      altText: 'Población',
      title: 'Población',
      description: 'La población de Salinas está compuesta por una mezcla diversa de residentes locales y expatriados que han encontrado en esta ciudad un lugar ideal para vivir. La comunidad es acogedora y está caracterizada por su hospitalidad. Los residentes disfrutan de un estilo de vida relajado, con acceso a todas las comodidades modernas y un entorno natural impresionante.'
    },
    {
      imgSrc: '../../../../img/info3.jpg',
      altText: 'Gastronomía',
      title: 'Gastronomía',
      description: 'La gastronomía en Salinas es una deliciosa mezcla de sabores locales e internacionales. Los mariscos frescos son una especialidad, con platos como el ceviche, camarones al ajillo, y pescado frito siendo muy populares. Además, la ciudad cuenta con una variedad de restaurantes que ofrecen desde cocina tradicional ecuatoriana hasta opciones gourmet internacionales.'
    },
    {
      imgSrc: '../../../../img/info4.jpg',
      altText: 'Turismo',
      title: 'Turismo',
      description: 'El turismo es vital en Salinas. Los visitantes disfrutan de deportes acuáticos como surf, jet ski y pesca deportiva. La ciudad ofrece una animada vida nocturna con numerosos bares y discotecas. Destacan el Malecón de Salinas, el Museo de Ballenas y las excursiones en yate para observar la vida marina.'
    }
  ];
}
