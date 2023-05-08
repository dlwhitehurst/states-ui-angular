import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {State} from '../state';
import {StateService} from '../state.service';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {
  state$!: Observable<State>;

  constructor(private route: ActivatedRoute, private router: Router, private service: StateService) {
  }


  ngOnInit() {
    this.state$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getState(params.get('id')!)));
  }

  gotoStates(state: State) {
    const stateId = state ? state.id : null;
    // Pass along the state id if available
    // so that the StateList component can select that state.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/states', {id: stateId, foo: 'foo'}]);
  }
}
