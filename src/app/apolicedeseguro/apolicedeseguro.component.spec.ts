import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolicedeseguroComponent } from './apolicedeseguro.component';

describe('ApolicedeseguroComponent', () => {
  let component: ApolicedeseguroComponent;
  let fixture: ComponentFixture<ApolicedeseguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolicedeseguroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApolicedeseguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
