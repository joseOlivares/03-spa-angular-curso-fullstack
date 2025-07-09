import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  products = [
    { id: 1, name: 'Producto A', price: 299.99, stock: 15 },
    { id: 2, name: 'Producto B', price: 199.99, stock: 8 },
    { id: 3, name: 'Producto C', price: 399.99, stock: 12 }
  ];
  
  totalSales = 2450.75;
  monthlyGoal = 5000;
  
  get salesProgress(): number {
    return (this.totalSales / this.monthlyGoal) * 100;
  }
}