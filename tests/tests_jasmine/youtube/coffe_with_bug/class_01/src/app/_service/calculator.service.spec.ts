import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

// Agrupador de testes describe
describe('CalculatorService', () => {
  let service: CalculatorService;

  // TODO To avoid repeating so much code within the functions, we use the before each
  beforeEach(() => {
    // configures a test module. It's like setting up a “mini Angular” just for testing.
    TestBed.configureTestingModule({
      providers: [CalculatorService],
      // you are saying:
      // “In this test environment, I want to make the CalculatorService
      //  service available.”
    });
    service = TestBed.inject(CalculatorService); // getting a calculator service instance
  });


  //TODO this is executed after each test
  //  afterEach(() => {

  // })

  it('should be created', () => {
    //  TestBed.configureTestingModule({});
    // service = TestBed.inject(CalculatorService);
    expect(service).toBeTruthy();
  });

});
