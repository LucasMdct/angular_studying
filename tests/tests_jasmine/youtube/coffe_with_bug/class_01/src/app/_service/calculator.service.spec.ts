import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService],

    });
    service = TestBed.inject(CalculatorService);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sum correctly with two numbers', () => {
    expect(service).toBeTruthy();
    const result = service.calc(5,8, 'add');

    expect(result).toBe(13);
  })

    it('should div correctly with two numbers', () => {
    expect(service).toBeTruthy();
    const result = service.calc(20,5, 'div');

    expect(result).toBe(4);
  })

    it('should mul correctly with two numbers', () => {
    expect(service).toBeTruthy();
    const result = service.calc(5,8, 'mul');

    expect(result).toBe(40);
  })

    it('should sub correctly with two numbers', () => {
    expect(service).toBeTruthy();
    const result = service.calc(15,0, 'sub');

    expect(result).toBe(15);
  })

});
