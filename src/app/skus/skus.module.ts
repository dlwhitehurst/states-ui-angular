import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SkuListComponent } from './sku-list/sku-list.component';
import { SkuDetailComponent } from './sku-detail/sku-detail.component';

import { SkusRoutingModule } from './skus-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SkusRoutingModule
  ],
  declarations: [
    SkuListComponent,
    SkuDetailComponent
  ]
})
export class SkusModule {}
