import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCalculatorModule } from './my-calculator/my-calculator.module';
import { MyNavigation } from './components/navigation.component';

@NgModule({
  declarations: [AppComponent, MyNavigation],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MyCalculatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
