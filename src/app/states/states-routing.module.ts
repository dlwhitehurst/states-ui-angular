import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StateListComponent } from './state-list/state-list.component';
import { StateDetailComponent } from './state-detail/state-detail.component';

const statesRoutes: Routes = [
  { path: 'states', redirectTo: '/states' },
  { path: 'state/:id', redirectTo: '/detailstate/:id' },
  { path: 'states',  component: StateListComponent, data: { animation: 'states' } },
  { path: 'detailstate/:id', component: StateDetailComponent, data: { animation: 'state' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(statesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StatesRoutingModule { }
