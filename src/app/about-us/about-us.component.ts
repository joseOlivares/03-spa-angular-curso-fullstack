import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  companyName = 'Nuestra Empresa';
  mission = 'Crear soluciones tecnológicas innovadoras';
  team = [
    { name: 'Ana García', role: 'CEO' },
    { name: 'Carlos López', role: 'CTO' },
    { name: 'María Rodríguez', role: 'Desarrolladora' }
  ];
}