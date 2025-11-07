import { AfterViewInit, Component, input } from '@angular/core';
import { ProyectosPrincipalesComponent } from '../proyectos-principales/proyectos-principales.component';
import Lenis from '@studio-freight/lenis';
import { HttpClientModule } from '@angular/common/http';
import { ProyectosSecundariosComponent } from '../proyectos-secundarios/proyectos-secundarios.component';

@Component({
  selector: 'app-proyectos',
  imports: [ProyectosPrincipalesComponent, ProyectosSecundariosComponent, HttpClientModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements AfterViewInit {
  title = 'frontend';

  isLeftSidebarCollapsed = input.required<boolean>();
  screenWidth = input.required<number>();

  ngAfterViewInit(): void {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('visible');
          } else {
            el.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    document.querySelectorAll('.slide').forEach((el) => {
      observer.observe(el);
    });

    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}