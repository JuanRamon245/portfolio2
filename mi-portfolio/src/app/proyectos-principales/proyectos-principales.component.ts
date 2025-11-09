import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

interface Tecnologia {
  nombre: string;
  logo: string;
}

interface Recurso {
  nombre: string;
  descripcion: string;
  img: string;
  enlace: string | null;
  url: string | null;
  tecnologias: Tecnologia[];
}

@Component({
  selector: 'app-proyectos-principales',
  imports: [CommonModule, NgbCarouselModule],
  standalone: true,
  templateUrl: './proyectos-principales.component.html',
  styleUrl: './proyectos-principales.component.css'
})
export class ProyectosPrincipalesComponent {
  constructor(private http: HttpClient) {}

  activeSlide = 0;

  onSlide(event: any) {
    const index = parseInt(event.current.replace('ngb-slide-', ''), 10);
    this.activeSlide = index;
  }

  recursos = [
    { 
      nombre: 'Acortador de URLs Online', 
      descripcion: 'Aplicación que permite crear y gestionar URLs acortadas con usuario y panel personal. Implementé autenticación, historial y funciones de edición y recuperación de cuenta. El sistema garantiza seguridad y uso estable en el día a día.', 
      img: 'undraw_website_27ju.svg',
      enlace: 'https://github.com/JuanRamon245/AcortadorURLOnline',
      url: 'https://juanramon245.github.io/AcortadorURLOnline/#',
      tecnologias: [
        { 
          nombre: 'Github', 
          logo: 'logos/gitLogo.png' 
        },
        { 
          nombre: 'Firebase', 
          logo: 'logos/firebaseLogo.png' 
        },
        { 
          nombre: 'Springboot', 
          logo: 'logos/springbootLogo.png' 
        },
        { 
          nombre: 'Angular', 
          logo: 'logos/angularLogo.png' 
        },
        { 
          nombre: 'Visual Studio', 
          logo: 'logos/vscodeLogo.png' 
        }
      ]
    }, { 
      nombre: 'Transportes Delivery', 
      descripcion: 'Web enfocada a ofrecer servicios de transporte y entregas en la isla. Contribuí en la maquetación visual, realizando el footer, la cabecera y la página de Servicios. Me centré en mantener una interfaz clara y coherente en todas las pantallas.', 
      img: 'undraw_website-visitors_qy9c.svg',
      enlace: null,
      url: 'https://transportesdelivery.com',
      tecnologias: [
        { 
          nombre: 'Bricks 2.0', 
          logo: 'logos/bricksLogo.png' 
        },
        { 
          nombre: 'Asana', 
          logo: 'logos/asanaLogo.png' 
        },
        { 
          nombre: 'Wordpress', 
          logo: 'logos/wordpressLogo.png' 
        }
      ]
    }, { 
      nombre: 'Aplicación de Gestión de Restaurantes', 
      descripcion: 'Aplicación móvil orientada a la gestión interna de pedidos en bares o restaurantes. Permite organizar, enviar y visualizar comandas entre los distintos trabajadores del local, facilitando la coordinación y reduciendo errores manuales.', 
      img: 'undraw_mobile-application_uc2q.svg',
      enlace: 'https://github.com/JuanRamon245/Cocinegocios',
      url: null,
      tecnologias: [
        { 
          nombre: 'Firebase', 
          logo: 'logos/firebaseLogo.png' 
        }, {
          nombre: 'Android Studio',
          logo: 'logos/androidLogo.png' 
        }, {
          nombre: 'Git',
          logo: 'logos/gitLogo.png' 
        }
      ]
    }
  ];
}
