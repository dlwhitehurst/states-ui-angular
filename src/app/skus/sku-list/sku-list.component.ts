// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SkuService } from '../sku.service';
import { Sku } from '../sku';

@Component({
  selector: 'app-sku-list',
  templateUrl: './sku-list.component.html',
  styleUrls: ['./sku-list.component.css']
})

export class SkuListComponent implements OnInit {
  skus$!: Observable<Sku[]>;
  selectedId = 0;

  constructor(
    private service: SkuService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {

    this.skus$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 1);
        return this.service.getSkus();
      })
    );
  }
}
