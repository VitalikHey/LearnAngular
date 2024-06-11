import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  protected counter: number = 0
  protected incrementOrDecrement(increment: boolean): void {
    this.counter += increment ? 1 : -1
  }
}
