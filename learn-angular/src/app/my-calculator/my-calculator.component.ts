import { Component } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.css'],
})
export class MyCalculatorComponent {
  public arrayOperations: Array<string> = ['+', '-', '*', '/'];
  public result?: number;
  public firstNumber: number = 1;
  public secondNumber: number = 1;
  public operation: string = '+';

  calculate(): void {
    switch (this.operation) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / this.secondNumber;
        break;
    }
  }
}
