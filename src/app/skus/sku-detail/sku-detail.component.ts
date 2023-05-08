import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Sku} from '../sku';
import {SkuService} from '../sku.service';

@Component({
  selector: 'app-sku-detail',
  templateUrl: './sku-detail.component.html',
  styleUrls: ['./sku-detail.component.css']
})
export class SkuDetailComponent implements OnInit {
  sku$!: Observable<Sku>;

  constructor(private route: ActivatedRoute, private router: Router, private service: SkuService) {
  }


  ngOnInit() {
    this.sku$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getSku(params.get('id')!)));
  }

  gotoSkus(sku: Sku) {
    const skuId = sku ? sku.id : null;
    // Pass along the sku id if available
    // so that the SkuList component can select that sku.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/skus', {id: skuId, foo: 'foo'}]);
  }
}
