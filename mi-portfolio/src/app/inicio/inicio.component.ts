import { AfterViewInit, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import Lenis from '@studio-freight/lenis';
import { InicioHomeComponent } from "../inicio-home/inicio-home.component";
import { InicioContactoComponent } from "../inicio-contacto/inicio-contacto.component";
import { InicioLineaTemporalComponent } from "../inicio-linea-temporal/inicio-linea-temporal.component";

@Component({
  selector: 'app-inicio',
  imports: [HttpClientModule, InicioHomeComponent, CommonModule, InicioContactoComponent, InicioLineaTemporalComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements AfterViewInit {
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

  toastVisible = false;

  mostrarToast() {
    console.log("mensaje", 'se ha enviado el toast correctamente');
    this.toastVisible = true;
    setTimeout(() => {
      this.toastVisible = false;
    }, 3000);
  }

}
