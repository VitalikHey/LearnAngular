import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyCalculatorModule } from './components/my-calculator/my-calculator.module';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyEmptyPage } from './components/empty-rout/empty-rout.component';
import { ObjectListModule } from './components/object-list/object-list.module';
import { LearnAngular } from './components/learn-angular/learn-angular.component';
import { ServiceComponent } from './components/service/service.component';
import { MyServer } from './components/service/my-server.service';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './components/child-component/child/child.component';
import { ParentComponent } from './components/parent-component/parent/parent.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavigation,
    MyEmptyPage,
    LearnAngular,
    ServiceComponent,
    ChildComponent,
    ParentComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MyCalculatorModule,
    ObjectListModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MyServer, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
