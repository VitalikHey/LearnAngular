import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCalculatorModule } from './components/my-calculator/my-calculator.module';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyEmptyPage } from './components/empty-rout/empty-rout.component';
import { ObjectListModule } from './components/object-list/object-list.module';

@NgModule({
  declarations: [AppComponent, MyNavigation, MyEmptyPage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MyCalculatorModule,
    ObjectListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
