import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WareHouseProductDetailComponent } from './warehouse-data/ware-house-product-detail/ware-house-product-detail.component';
import { WareHouseProductEditComponent } from './warehouse-data/ware-house-product-edit/ware-house-product-edit.component';
import { WareHouseProductListComponent } from './warehouse-data/ware-house-product-list/ware-house-product-list.component';
import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'ware-house-product-list', component: WareHouseProductListComponent, canActivate: [AuthGuard]  },
  { path: 'ware-house-product-list/:id', component: WareHouseProductDetailComponent, canActivate: [AuthGuard]  },
  {
    path: 'ware-house-product-edit/:id/edit',
    // canDeactivate: [ProductEditGuard],
    component: WareHouseProductEditComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
// export class AppRoutingModule { }
