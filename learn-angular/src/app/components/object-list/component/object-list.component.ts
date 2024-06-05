import { Component } from '@angular/core';

@Component({
  selector: 'object-list',
  templateUrl: 'object-list.component.html',
  styleUrls: ['object-list.component.scss'],
})
export class ObjectList {
  protected readonly myObjects: Array<MyObject> = myObjects;

  public viewContent(object: MyObject): void {
    alert(object.content);
  }
}

export const myObjects: Array<MyObject> = [
  {
    title: 'First',
    content: 'Ryan Gosling',
    id: 1,
  },
  {
    title: 'Second',
    content: 'Ozon',
    id: 2,
  },
  {
    title: 'Third',
    content: 'Wildberries',
    id: 3,
  },
  {
    title: 'Fourth',
    content: '(ﾒ￣▽￣)︻┳═一   bug',
    id: 4,
  },
  {
    title: 'Fifth',
    content: 'Google',
    id: 5,
  },
];

export interface MyObject {
  title: string;
  content: string;
  id: number;
}
