import { Injectable } from '@angular/core';
import { LoggerService } from '../logger-service/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  constructor(private logger: LoggerService) {}

  add(num1: number, num2: number) {
    this.logger.log('Add function called');
    return num1 + num2;
  }

  subtract(num1: number, num2: number) {
    this.logger.log('Subtract function called');
    return num1 - num2;
  }
}
