import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  ngOnInit(): void {
    AOS.init({
      duration: 6000, // Duración de la animación en milisegundos
      once: true,     // Ejecutar la animación solo una vez
      easing: 'ease-in-out', // Curva de animación
    });
  }
}
