import { Injectable } from '@angular/core';

@Injectable()
export class IvaCalculatorService {

    calculateTax(value: number, percentage: number): Promise<number> {
      console.log(value, percentage);
      
      return Promise.resolve(value*percentage/100);
    }

}
