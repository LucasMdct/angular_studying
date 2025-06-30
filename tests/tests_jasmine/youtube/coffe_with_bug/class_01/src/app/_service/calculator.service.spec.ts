import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

// Agrupador de testes describe
describe('CalculatorService', () => {
  let service: CalculatorService;

  // TODO To avoid repeating so much code within the functions, we use the before each
  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(CalculadoraService);
  // });

  it('should be created', () => {
     TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
    expect(service).toBeTruthy();
  });


  it('should be created', () => {
     TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
    expect(service).toBeTruthy();
  });
});
