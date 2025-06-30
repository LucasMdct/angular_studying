import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
    private loggerService: LoggerService
  ) { }

  calc(num1:number ,num2: number, operation: string){
    switch(operation) {
      case 'add':
        return num1 + num2;
      case 'mul':
        return num1 * num2;
      case 'div':
        return num1 / num2;
      case 'sub':
        return num1 - num2;
      default:
        this.loggerService.log('Non-existent operation')
        return null;
    }
  }
}
