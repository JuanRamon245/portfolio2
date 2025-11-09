import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-proyectos-secundarios',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './proyectos-secundarios.component.html',
  styleUrl: './proyectos-secundarios.component.css'
})
export class ProyectosSecundariosComponent {
  constructor(private http: HttpClient) {}

  activeSlide = 0;

  onSlide(event: any) {
    const id = event?.currentSlide || event?.current;
    if (!id) return;
    const match = id.match(/\d+$/);
    if (match) {
      this.activeSlide = parseInt(match[0], 10);
    }
  }

  recursos: Recurso[] = [
     { 
      nombre: 'Acortador de URLs', 
      descripcion: 'Primer prototipo funcional de un sistema de acortamiento, en localhost. Permitía introducir una URL, generar una versión acortada y utilizarla un numero limitado de veces. Estuve de encargado del backend.', 
      img: 'undraw_building-websites_k2zp.svg',
      enlace: 'https://github.com/JuanRamon245/aplicacionRecortarURLs',
      url: null,
      tecnologias: [
        { 
          nombre: 'Fork', 
          logo: 'logos/forkLogo.png' 
        },
        { 
          nombre: 'Java', 
          logo: 'logos/javaLogo.png' 
        },
        { 
          nombre: 'Jakarta EE', 
          logo: 'logos/jakartaLogo.png' 
        },
        { 
          nombre: 'PHPMyAdmin', 
          logo: 'logos/PhpMyAdminLogo.png' 
        },
        { 
          nombre: 'IntelliJ', 
          logo: 'logos/intellijLogo.png' 
        }
      ]
    }, { 
      nombre: 'Tienda online', 
      descripcion: 'Desarrollo de una tienda web con funcionalidades de catálogo, carrito de compras, gestión de pedidos y procesamiento básico de pagos. El proyecto incluyó tanto la parte visual como la lógica de negocio.', 
      img: 'undraw_web-shopping_m3o2.svg',
      enlace: 'https://github.com/JuanRamon245/Tienda-online-prototipo',
      url: null,
      tecnologias: [
        { 
          nombre: 'Fork', 
          logo: 'logos/forkLogo.png' 
        },
        { 
          nombre: 'Java', 
          logo: 'logos/javaLogo.png' 
        },
        { 
          nombre: 'Jakarta EE', 
          logo: 'logos/jakartaLogo.png' 
        },
        { 
          nombre: 'MySQL', 
          logo: 'logos/mySQlLogo.png' 
        },
        { 
          nombre: 'IntelliJ', 
          logo: 'logos/intellijLogo.png' 
        }
      ]
    }
  ];
}
