import { AfterViewInit, Component, input } from '@angular/core';
import { ProyectosPrincipalesComponent } from '../proyectos-principales/proyectos-principales.component';
import { InicioHomeComponent } from "../inicio-home/inicio-home.component";
import { InicioLineaTemporalComponent } from "../inicio-linea-temporal/inicio-linea-temporal.component";
import Lenis from '@studio-freight/lenis';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-proyectos',
  imports: [ProyectosPrincipalesComponent, InicioHomeComponent, InicioLineaTemporalComponent, HttpClientModule],
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