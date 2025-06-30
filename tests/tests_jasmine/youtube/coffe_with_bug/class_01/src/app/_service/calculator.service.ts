import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

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
        return null;
    }
  }
}
