import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

// Agrupador de testes describe
describe('CalculadoraService', () => {
  let service: CalculadoraService;

  // TODO Para não repetirmos tantos códigos dentro das funções its , usamos o before each
  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(CalculadoraService);
  // });

  it('should be created', () => {
     TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
    expect(service).toBeTruthy();
  });


  it('should be created', () => {
     TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
    expect(service).toBeTruthy();
  });
});
