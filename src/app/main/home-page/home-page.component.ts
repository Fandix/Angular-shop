import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newArrivalProducts, NewArrivalSelectEnum, ProductGroupEnum } from './home-page.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  newProducts: newArrivalProducts[] = [];
  productCategoriesUrlList = [
    { name: 'Man', url: '../../../assets/img/man.png'},
    { name: 'Female', url: '../../../assets/img/female.png' },
    { name: 'Accessories', url: '../../../assets/img/accessories.png' }
  ];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000').subscribe((res: any) => {
      this.newProducts = res.newArrival;
    });
  }

  getNewArrivalProducts(index: number) {
    return this.newProducts.filter((product: newArrivalProducts) => product.group === index);
  }

}
