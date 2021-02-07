import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-ware-house-product-detail',
  templateUrl: './ware-house-product-detail.component.html',
  styleUrls: ['./ware-house-product-detail.component.css']
})
export class WareHouseProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  errorMessage = '';
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private warehouseService: WarehouseService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.warehouseService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = (error as any));
  }

  onBack(): void {
    this.router.navigate(['../ware-house-product-list']);
  }

}
