import { Component, OnInit, Input } from '@angular/core';

import { Article } from "../article";
import { IvaCalculatorService } from "./iva-calculator.service";

@Component({
  selector: 'app-iva-calculator',
  templateUrl: './iva-calculator.component.html',
  styleUrls: ['./iva-calculator.component.css']
})
export class IvaCalculatorComponent implements OnInit {
  @Input() percentage: number;
  article: Article;
  taxValue: number;

  constructor(private ivaService: IvaCalculatorService) { 
    this.article = new Article;
  }

  ngOnInit() {
  }

  clickEvent() {
    console.log("Percentage:", this.percentage);
    console.log("Article:", this.article);
    if (this.article && this.article.value){
      this.ivaService.calculateTax(this.article.value, this.percentage)
      .then(tax_value => {
        this.taxValue = tax_value;
        console.log("Calculated tax:", this.taxValue);
      });
    }
  }
}
