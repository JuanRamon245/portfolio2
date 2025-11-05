import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

export const rutas: Routes = [
    { path: '', component: InicioComponent },
    { path: 'proyectos', component: ProyectosComponent}
];
