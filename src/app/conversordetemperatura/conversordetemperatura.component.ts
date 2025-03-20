import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversordetemperatura',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversordetemperatura.component.html',
  styleUrl: './conversordetemperatura.component.css'
})
export class ConversordetemperaturaComponent {
  celsius: number = 0;

  fahrenheit: number = 0;
  kelvin: number = 0;

  calcular(){
    this.fahrenheit = (this.celsius * 9 / 5) + 32
    this.kelvin = this.celsius + 273.15
  }
 
}
