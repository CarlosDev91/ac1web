import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  operation: string = '+';
  result: number | string = '';
  calculate(): void {
    switch (this.operation) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num2 !== 0 ? this.num1 / this.num2 : 'Erro';
        break;
      default:
        this.result = 'Erro';
    }
  }

}
