import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice-de-seguro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apolicedeseguro.component.html',
  styleUrl: './apolicedeseguro.component.css'
})
export class ApoliceDeSeguroComponent {
  nome: string = '';
  idade: number | null = null;
  tipoSeguro: string = 'auto';
  valorSeguro: string = '';

  calcularValor(): void {
    if (!this.idade || this.idade <= 0) {
      this.valorSeguro = 'Idade inválida';
      return;
    }

    let baseValor = 0;

    switch (this.tipoSeguro) {
      case 'auto':
        baseValor = 1000;
        break;
      case 'vida':
        baseValor = 2000;
        break;
      case 'residencial':
        baseValor = 1500;
        break;
      default:
        baseValor = 0;
    }

    this.valorSeguro = `R$ ${(baseValor - this.idade * 10).toFixed(2)}`;
  }
}
