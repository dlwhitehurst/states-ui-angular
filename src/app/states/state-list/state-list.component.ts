// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StateService } from '../state.service';
import { State } from '../state';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})

export class StateListComponent implements OnInit {
  states$!: Observable<State[]>;
  selectedId = 0;

  constructor(
    private service: StateService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {

    this.states$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 1);
        return this.service.getStates();
      })
    );
  }
}
