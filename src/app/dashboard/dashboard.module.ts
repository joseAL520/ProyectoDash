import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserConteinerComponent } from './shared/user-conteiner/user-conteiner.component';


@NgModule({
  declarations: [
    AddProductPageComponent,
    DashboardPageComponent,
    AddUserPageComponent,
    MenuComponent,
    FooterComponent,
    UserConteinerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[
    MenuComponent,
    UserConteinerComponent
  ]
})
export class DashboardModule { }
