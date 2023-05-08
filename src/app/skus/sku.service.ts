import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Sku } from './sku';
import { SKUS } from './mock-skus';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class SkuService {
  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SkuService: ${message}`);
  }

  private APIURL = 'http://localhost:3000/skus';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  });

  getSkus(): Observable<Sku[]> {
    this.log("Hello David");
    return this.http.get<Sku[]>(this.APIURL, { headers: this.httpHeaders } );
    //return of(SKUS);
  }

  getSku(id: number | string) {
    return this.getSkus().pipe(
      // (+) before `id` turns the string into a number
      map((skus: Sku[]) => skus.find(sku => sku.id === +id)!)
    );
  }
}

