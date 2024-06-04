import { Component } from '@angular/core';

interface CalculateGroup {
  firstNum: CalculateNum;
  secondNum: CalculateNum;
  operation: CalcOperations;
}

interface CalculateNum {
  value: number;
  modified: CalcModified;
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
}

enum CalcModified {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  tg = 'tg',
  log = 'log',
  sqrt = 'sqrt',
}

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.css'],
})
export class MyCalculatorComponent {
  public calcOperations = CalcOperations;
  public calcModified = CalcModified;
  public calcGroups: CalculateGroup[] = [
    {
      firstNum: {
        value: 1,
        modified: CalcModified.none,
      },
      secondNum: {
        value: 1,
        modified: CalcModified.none,
      },
      operation: CalcOperations.plus,
    },
  ];

  public history: Array<string> = [];

  public operationsBetweenGroups: Array<CalcOperations> = [];

  public result?: number;

  public addGroup(): void {
    this.calcGroups.push({
      firstNum: {
        value: 0,
        modified: CalcModified.none,
      },
      secondNum: {
        value: 0,
        modified: CalcModified.none,
      },
      operation: CalcOperations.plus,
    });
  }
  public deleteGroup(index: number): void {
    this.calcGroups.splice(index, 1);
  }
  public calcGroup() {
    let result: number = 0
    let tempHistory: string[] = []

    this.calcGroups.forEach((group:CalculateGroup,i:number):void => {
      if (i === 0) {
        result = this.calculate(this.calcValueWithModified(group.firstNum), this.calcValueWithModified(group.secondNum), group.operation)
      } else {
        let tempResult: number = this.calculate(this.calcValueWithModified(group.firstNum), this.calcValueWithModified(group.secondNum), group.operation)
        result = this.calculate(result, tempResult, this.operationsBetweenGroups[i - 1])
        tempHistory.push(this.operationsBetweenGroups[i - 1]);
      }
      tempHistory.push(
        `
          (
          ${group.firstNum.modified != CalcModified.none ? group.firstNum.modified: ''} ${group.firstNum.value}
          ${group.operation}
          ${group.secondNum.modified != CalcModified.none ? group.secondNum.modified: ''} ${group.secondNum.value}
          )
          `)
    })

    tempHistory.push(`= ${result}`)
    this.history.push(tempHistory.join(' '))

    this.result = result
  }
  public calcValueWithModified(value: CalculateNum): number {
    switch (value.modified) {
      case CalcModified.none:
        return value.value;
      case CalcModified.cos:
        return Math.cos(value.value);
      case CalcModified.sin:
        return Math.sin(value.value);
      case CalcModified.sqrt:
        return Math.sqrt(value.value);
      case CalcModified.tg:
        return Math.tan(value.value);
      case CalcModified.log:
        return Math.log(value.value);
    }
  }
  calculate(firstNum: number, secondNum: number, operation: CalcOperations): number {
    switch (operation) {
      case CalcOperations.plus:
        return firstNum + secondNum;
      case CalcOperations.minus:
        return firstNum - secondNum;
      case CalcOperations.multiply:
        return firstNum * secondNum;
      case CalcOperations.divide:
        return firstNum / secondNum;
    }
  }
}
