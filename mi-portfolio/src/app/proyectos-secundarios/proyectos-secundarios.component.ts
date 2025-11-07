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
  styleUrl: './proyectos-secundarios.component.css',
  
})
export class ProyectosSecundariosComponent {
  constructor(private http: HttpClient) {}

  activeSlide = 0;

  onSlide(event: any) {
    const index = parseInt(event.current.replace('ngb-slide-', ''), 10);
    this.activeSlide = index;
  }

  recursos: Recurso[] = [
    { 
      nombre: 'En proceso', 
      descripcion: 'Actualmente no hay más proyectos, en un futuro se iran añadiendo y expandiendo este apartado', 
      img: 'undraw_server-error_syuz.svg',
      enlace: null,
      url: null,
      tecnologias: []
    }
  ];
}
