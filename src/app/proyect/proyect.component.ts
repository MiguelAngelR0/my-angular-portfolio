import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import AOS from 'aos';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-proyect',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.scss']
})
export class ProyectComponent {
  ngOnInit(): void {
    AOS.init({
      easing: 'ease-in-out', // Curva de animación
    });
  }
}
