import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-ware-house-product-list',
  templateUrl: './ware-house-product-list.component.html',
  styleUrls: ['./ware-house-product-list.component.css']
})
export class WareHouseProductListComponent implements OnInit {

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  // tslint:disable-next-line:variable-name
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];
  constructor(
    private warehouseService: WarehouseService,
    private router: Router
  ) { }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.warehouseService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = (error as any)
    );
  }

  productEdit(id: any){

    this.router.navigate([`../ware-house-product-edit/${id}/edit`]);
    console.log(id);
  }

}
