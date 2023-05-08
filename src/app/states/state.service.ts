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

  handleError(title: string) {
	  return null;
  }
  
  private APIURL = 'http://localhost:3000/states';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  });

  getStates(): Observable<State[]> {
    //return of(STATES);
    return this.http.get<State[]>(this.APIURL, { headers: this.httpHeaders } );	  
  }

  getState(id: number | string) {
    return this.getStates().pipe(
      // (+) before `id` turns the string into a number
      map((states: State[]) => states.find(state => state.id === +id)!)
    );
  }
}

