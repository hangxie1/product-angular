import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderFormComponent} from './order-form/order-form.component';

const routes: Routes = [
  { path: 'addProduct', component: OrderFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
