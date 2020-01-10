import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  tvalue=0;
  fvalue=0;
  svalue=0;
  oper=""
  constructor() { }

  ngOnInit() {
  }
  onInputChange($event){
    this.tvalue=$event.target.value;
  }
  onButtonClick( val){
  if(this.tvalue==0){

    this.tvalue= val; 
  }else{

    this.tvalue=this.tvalue+val; 
  }
  }
  opr(val){
    this.fvalue=this.tvalue;
    this.tvalue=0;
    this.oper=val;
  }
  equ(val){
    this.svalue=this.tvalue;
    if(this.oper=='+')
    {
      this.tvalue=Number(this.fvalue)+Number(this.svalue);
    }else if(this.oper=='-')
    {
      this.tvalue=Number(this.fvalue)-Number(this.svalue);
    }else if(this.oper=='*')
    {
      this.tvalue=Number(this.fvalue)*Number(this.svalue);
    }else if(this.oper=='/')
    {
      this.tvalue=Number(this.fvalue)/Number(this.svalue);
    }
  }
  clear()
  {
    this.tvalue=0;
    this.fvalue=0;
    this.svalue=0;
    this.oper="";
  }
}
