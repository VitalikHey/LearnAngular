import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  protected counter: number = 0
  protected incrementOrDecrement(operation: string): void {
    if(operation === '+') {
      this.counter += 1
    } else {
      this.counter -= 1
    }
  }
}
