import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { InitComponent } from './pages/init/init.component';
import { DebtorsComponent } from './pages/debtors/debtors.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { NewDebtorComponent } from './pages/new-debtor/new-debtor.component';

const routes: Routes = [
  {
    path: 'init',
    component: InitComponent,
    title: 'Início'
  },
  {
    path: 'debtors',
    component: DebtorsComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'new-product',
    component: NewProductComponent
  },
  {
    path: 'new-debtor',
    component: NewDebtorComponent
  },
  {
    path: '**',
    redirectTo: 'init'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
