import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './components/my-calculator/my-calculator.component';
import { MyEmptyPage } from './components/empty-rout/empty-rout.component';
import { ObjectList } from './components/object-list/component/object-list.component';
import { ParentComponent } from './components/parent-component/parent/parent.component';
import { LearnAngular } from './components/learn-angular/learn-angular.component';
import {ServiceComponent} from "./components/service/service.component";
import {CounterComponent} from "./components/counter/counter.component";

const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
  },
  {
    path: 'object-list',
    component: ObjectList,
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'server',
    component: ServiceComponent,
  },
  {
    path: 'learn-angular',
    component: LearnAngular,
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: '**',
    component: MyEmptyPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
