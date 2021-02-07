import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';

import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WarehouseService } from '../warehouse-data/warehouse.service';
import { Product } from '../warehouse-data/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  loading = false;
  users: User[];
  getUsername: string;
  filteredProducts: Product[] = [];
  products: Product[] = [];
  errorMessage = '';
  totalProductsCount: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private warehouseService: WarehouseService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }


  ngOnInit(): void {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
      this.getUsername = this.users[0].firstName + ' ' + this.users[0].lastName;
      console.log(this.users[0].firstName + ' ' + this.users[0].lastName);
    });

    this.warehouseService.getProducts().subscribe(
      products => {
        this.products = products;
        console.log(this.products.length);
        this.totalProductsCount = this.products.length;
        this.filteredProducts = this.products;
        console.log(this.filteredProducts);
      },
      error => this.errorMessage = (error as any)
    );


  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
