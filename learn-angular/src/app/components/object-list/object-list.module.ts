import { NgModule } from '@angular/core';

import { ObjectList } from './component/object-list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  exports: [ObjectList],
  declarations: [ObjectList],
  providers: [],
})
export class ObjectListModule {}
