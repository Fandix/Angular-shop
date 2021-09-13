import { Component, OnInit, Input } from '@angular/core';
import { newArrivalProducts } from '@src/app/main/home-page/home-page.model';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() productsList: newArrivalProducts[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  getStartCount(product: newArrivalProducts) {
    const startList = [];
    for (let i = 0; i < product.start; i++) {
      startList.push('')
    }

    return startList;
  }

}
