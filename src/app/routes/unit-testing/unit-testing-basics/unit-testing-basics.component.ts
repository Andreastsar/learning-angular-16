import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-testing-basics',
  templateUrl: './unit-testing-basics.component.html',
  styles: [
  ]
})
export class UnitTestingBasicsComponent {
  calculatorSrv = `
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
  `;

  testBedBasics = `
    import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from '../logger-service/logger.service';

// CalculatorService TestSuite
describe('CalculatorService', () => {
  let calculatorService: CalculatorService;
  let loggerServiceSpy: any;

  // Before each specification (test)
  beforeEach(() => {
    /** We need to define which other dependencies are needed for the Calculator Service
     * to be able to run and be tested */

    /** Let's say we want to check the uses of the log() function of the LoggerService
     * But this is UNIT test for CalculatorService, meaning the use of an actual instance of
     * LoggerService shouldn't be part of this Test Suite
     *
     * For this reason we simulate the injection of the LoggerService using a spy Object via Jasmine,
     * that simulates the existence of the LoggerService and it's functions */
    loggerServiceSpy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService, // ---> original instance of the service
        {
          provide: LoggerService,
          useValue: loggerServiceSpy
        }
      ] // dependencies injection
    });

    calculatorService = TestBed.inject(CalculatorService);
  });

  //---- Specifications (Tests) ----//
  it('calculator service should be instantiated', () => {
    expect(calculatorService).toBeTruthy();
  });

  it('should add two numbers', () => {
    const result = calculatorService.add(1, 5);

    expect(result).toBe(6);
  });

  it('should add two numbers', () => {
    const result = calculatorService.subtract(1, 5);

    expect(result).toBe(-4);
  });

  it('should return a type of "number"', () => {
    const result = calculatorService.add(1, 5);

    expect(typeof result).toBe('number');
  });

  it('should return typeof "number" equal to 0 if both inputs are equal', () => {
    const result = calculatorService.subtract(2, 2);
    expect(typeof result).toBe('number');
    expect(result).toBe(0);
  });

  it('should use the log() function exactly one time', () => {
    calculatorService.add(1, 5);

    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should be pending', () => {
    pending(); // Meaning the spec is not yet ready to run
  });

  it('should fail', () => {
    fail(); // Simulate the failure of this spec
  });
});

  `;

  loggerSrv = `
    import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {}

  log(message: string) {
    console.log(message);
  }
}
    `;

}
