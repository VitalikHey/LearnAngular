import { Component } from '@angular/core';

@Component({
  selector: 'learn-angular',
  templateUrl: 'learn-angular.component.html',
  styleUrls: ['learn-angular.component.scss'],
})
export class LearnAngular {
  items: Array<number> = [1, 2, 3, 1, 1, 1];

  itemValid(item: any): boolean {
    return typeof item === 'number';
  }
}
