import { LOCALE_ID, NgModule } from '@angular/core';
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
import { LineGraficComponent } from './components/line-grafic/line-grafic.component';
import { PieGraficComponent } from './components/pie-grafic/pie-grafic/pie-grafic.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { WindowModalComponent } from './components/window-modal/window-modal.component';
import { BarGraficComponent } from './components/bar-grafic/bar-grafic.component';
import { CurrencyFormatDirective } from './directive/currency-format.directive';
import { CurrencyFormatPipe } from './pipe/currency-format.pipe';




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
    AddProductComponent,
    LineGraficComponent,
    PieGraficComponent,
    CardsComponent,
    WindowModalComponent,
    BarGraficComponent,
    CurrencyFormatDirective,
    CurrencyFormatPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    MenuComponent,
    UserConteinerComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' } // Configura el local globalmente
  ],
})
export class DashboardModule { }
