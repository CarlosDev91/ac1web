import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {
  peso: number = 0;
  altura: number = 0;

  imcTotal: number = 0;

  classificacao: string = '';

  calcular() {
    this.imcTotal = 0;
    this.imcTotal = this.peso / (this.altura * this.altura)

    if (this.imcTotal <= 18.5) {
      this.classificacao = 'Abaixo do peso';
    } else if (this.imcTotal >= 18.5 && this.imcTotal <= 24.9) {
      this.classificacao = 'Peso normal';
    } else if (this.imcTotal >= 25 && this.imcTotal <= 29.9) {
      this.classificacao = 'Sobrepeso'
    } else if (this.imcTotal >= 30 && this.imcTotal <= 34.9) {
      this.classificacao = 'Obesidade grau I'
    } else if (this.imcTotal >= 35 && this.imcTotal <= 39.9) {
      this.classificacao = 'Obesidade grau II'
    } else {
      this.classificacao = 'Obesidade grau III'
    }
  }
}