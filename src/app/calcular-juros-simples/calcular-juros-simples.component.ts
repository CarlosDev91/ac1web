import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-juros-simples',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calcular-juros-simples.component.html',
  styleUrl: './calcular-juros-simples.component.css'
})
export class CalcularJurosSimplesComponent {
  capital: number = 0;
  taxa: number = 0;
  tempo: number = 0;
  juros: number = 0;
  montante: number = 0;

  calcularJuros() {
    let taxaDecimal = this.taxa / 100;
    this.juros = this.capital * taxaDecimal * this.tempo;
    this.montante = this.capital + this.juros;
  }
}
