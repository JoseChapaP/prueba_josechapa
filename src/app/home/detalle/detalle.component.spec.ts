import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComponent } from './detalle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('DetalleComponent', () => {
  let component: DetalleComponent;
  let fixture: ComponentFixture<DetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('return_simbol_when_is_Dolar', () => {    
    const result = component.setMeasure('Dólar');
    expect(result).toBe('USD$');
  });

  it('return_simbol_when_is_Dolar', () => {    
    const result = component.setMeasure('Pesos');
    expect(result).toBe('$');
  });

  it('return_simbol_when_is_Dolar', () => {    
    const result = component.setMeasure('Porcentaje');
    expect(result).toBe('%');
  });

  it('return_simbol_when_is_Nothing', () => {    
    const result = component.setMeasure('');
    expect(result).toBe('');
  });

});
