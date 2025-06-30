import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,{
          provide: LoggerService, useValue: loggerSpy
        }
      ],

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

  it('Non-existent operation', () => {
    expect(service).toBeTruthy();
    const result = service.calc(20,4, 'vsvdsf');

    expect(result).toBeNull();
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  })

});
