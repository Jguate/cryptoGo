import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricesComponent } from './views/prices/prices.component';

const routes: Routes = [
  {path: 'Prices', component: PricesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
