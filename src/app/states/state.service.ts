import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { State } from './state';
import { STATES } from './mock-states';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class StateService {
  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StateService: ${message}`);
  }

  private statesUrl = 'http://localhost:8081/camel/api/v1/states';  // URL to web api
  
  handleError(title: string) {
	  return null;
  }

  getStates(): Observable<State[]> {
    //console.log(this.http.get<State[]>(this.statesUrl));
    //return this.http.get<State[]>(this.statesUrl)
	  return of(STATES);
	  //return null;
  }

  getState(id: number | string) {
    return this.getStates().pipe(
      // (+) before `id` turns the string into a number
      map((states: State[]) => states.find(state => state.id === +id)!)
    );
  }
}

