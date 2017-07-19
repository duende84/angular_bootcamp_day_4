import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IvaCalculatorComponent } from './iva-calculator.component';
import { IvaCalculatorService } from './iva-calculator.service';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    IvaCalculatorComponent
  ],
  exports: [
    IvaCalculatorComponent
  ],
  providers: [
    IvaCalculatorService
  ]
})
export class IvaCalculatorModule { }
