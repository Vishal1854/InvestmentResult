import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate=new EventEmitter<{initialInvestment:number,
    expectedReturn:number,
    duration:number,
    annualInvestment:number}>()
  enteredinitialInvestment='0';
  enteredexpectedReturn='0';
  enteredDuration='0';
  enteredannualInvestment='0';
  onSubmit(){
  this.calculate.emit({
    initialInvestment:+this.enteredinitialInvestment,
    expectedReturn:+this.enteredexpectedReturn,
    duration:+this.enteredDuration,
    annualInvestment:+this.enteredannualInvestment
  })
}
}

