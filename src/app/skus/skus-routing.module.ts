import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkuListComponent } from './sku-list/sku-list.component';
import { SkuDetailComponent } from './sku-detail/sku-detail.component';

const skusRoutes: Routes = [
  { path: 'skus', redirectTo: '/skus' },
  { path: 'sku/:id', redirectTo: '/detailsku/:id' },
  { path: 'skus',  component: SkuListComponent, data: { animation: 'skus' } },
  { path: 'detailsku/:id', component: SkuDetailComponent, data: { animation: 'sku' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(skusRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SkusRoutingModule { }
