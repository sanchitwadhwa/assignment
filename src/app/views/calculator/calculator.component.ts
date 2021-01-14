import { Component ,OnInit} from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{

  existingEMIField:boolean=false;
  config={
    search:true,
    displayKey:'val'
  }
  options = [
    new Tenure(0, "3 months"),
    new Tenure(1, "6 months"),
    new Tenure(2, "9 months"),
    new Tenure(3, "12 months")
  ];
  filters: any;
  pemi = {
    value: "150000"
  }
  remi = {
    value: "50000"
  }
  query = {
    amount: "",
    expense: "",
  }

  yrToggel: boolean;
  poptions: Options = {
    floor: 100000,
    ceil: 300000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b></b>';
        case LabelType.High:
          return value + '<b></b>';
        default:
          return value + '<b></b>';
      }
    }
  };
  roptions: Options = {
    floor: 5000,
    ceil: 100000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b></b>';
        case LabelType.High:
          return value + '<b></b>';
        default:
          return value + '<b></b>';
      }
    }
  };
 

  constructor() {
    this.yrToggel = true;
  }

  ngOnInit(){
    this.update();
  }


  update() {
    var amount = Number(this.pemi.value);
    var monthlyExpense = Number(this.remi.value);

    this.query.amount = amount.toString();
    this.query.expense = monthlyExpense.toString();

  }

  onChange(event){
    if(event){
    this.existingEMIField = true;
  }else{
    this.existingEMIField = false;
  }
  }

  selectionChanged(){

  }

}
export class Tenure {
  public id: number;
  public val: string;

  constructor(id: number, val: string) {
    this.id = id;
    this.val = val;
  }
}