import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [

{
  path:'',
  children:[
    {path:'add-product',title:'Agregar Produtos',component: AddProductPageComponent},
    {path:'add-User',title:'Agregar Usuarios',component: AddUserPageComponent},
    {path:'dashboard',title:'dashboard',component: DashboardPageComponent},
    {path:'**',redirectTo:'dashboard'}
  ]
},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

