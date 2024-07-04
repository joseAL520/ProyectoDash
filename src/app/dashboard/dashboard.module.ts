import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserConteinerComponent } from './shared/user-conteiner/user-conteiner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListUserComponent } from './pages/add-user-page/list-user/list-user.component';
import { FormUserComponent } from './pages/add-user-page/form-user/form-user.component';
import { ListProductComponent } from './pages/add-product-page/list-product/list-product.component';
import { AddProductComponent } from './pages/add-product-page/add-product/add-product.component';


@NgModule({
  declarations: [
    AddProductPageComponent,
    DashboardPageComponent,
    AddUserPageComponent,
    MenuComponent,
    FooterComponent,
    UserConteinerComponent,
    ListUserComponent,
    FormUserComponent,
    ListProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    MenuComponent,
    UserConteinerComponent
  ]
})
export class DashboardModule { }
