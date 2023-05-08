import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StateListComponent } from './state-list/state-list.component';
import { StateDetailComponent } from './state-detail/state-detail.component';

import { StatesRoutingModule } from './states-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StatesRoutingModule
  ],
  declarations: [
    StateListComponent,
    StateDetailComponent
  ]
})
export class StatesModule {}
