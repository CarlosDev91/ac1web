import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversordetemperaturaComponent } from './conversordetemperatura.component';

describe('ConversordetemperaturaComponent', () => {
  let component: ConversordetemperaturaComponent;
  let fixture: ComponentFixture<ConversordetemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversordetemperaturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversordetemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
