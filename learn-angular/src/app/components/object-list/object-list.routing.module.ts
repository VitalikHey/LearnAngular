import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectList } from './component/object-list.component';
import { MyEmptyPage } from '../empty-rout/empty-rout.component';

const routes: Routes = [
  {
    path: '/',
    component: ObjectList,
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
