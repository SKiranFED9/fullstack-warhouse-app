import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WareHouseListComponent } from './ware-house-list/ware-house-list.component';
import { WareHouseProductListComponent } from './ware-house-product-list/ware-house-product-list.component';
import { WareHouseProductDetailComponent } from './ware-house-product-detail/ware-house-product-detail.component';
import { WareHouseProductEditComponent } from './ware-house-product-edit/ware-house-product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [WareHouseListComponent, WareHouseProductListComponent, WareHouseProductDetailComponent, WareHouseProductEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WarehouseDataModule { }
