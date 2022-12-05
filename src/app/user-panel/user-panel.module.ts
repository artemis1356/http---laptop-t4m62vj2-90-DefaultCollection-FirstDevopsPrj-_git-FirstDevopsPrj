import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelRoutingModule } from './user-panel-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { MaterialModule } from '../material.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    UserLayoutComponent,
    ShoppingCartComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    UserPanelRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class UserPanelModule { }
