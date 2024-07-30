import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../../services/produc.service';
import { UserServicesService } from '../../services/user.service';
import { map, take, tap } from 'rxjs';


@Component({
  selector: 'components-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

  public user$!: number
  public totalProduct$!: number
  public priceTotalProduc!: number
  constructor(
    private srvProdcut: ProductServicesService,
    private srvUsers: UserServicesService
  ){}


  totalUser(){
     this.srvUsers.getuserList().pipe(
        map(value => value.length),
        tap(res => this.user$ = res),
     ).subscribe()
  }

  totalProduct(){
    this.srvProdcut.getProductList().pipe(
        map( value => value.map( cant=>cant.cantidad )),
        map(cantidades => cantidades.reduce((acumulador, valorActual) => acumulador + valorActual, 0)),
        tap(resp => this.totalProduct$ = resp),
      
    ).subscribe()
  }

  priceTotalProduct(){
    this.srvProdcut.getProductList().pipe(
      map(valu => valu.map( product => ({ price: Number(product.precio), cant: product.cantidad}))),
      map(res =>  res.map( value => {  const result = value.price * value.cant;  return result; })),
      map(priceTotal => priceTotal.reduce((acum, value) => acum + value, 0 )),
      map(price=> this.priceTotalProduc = price )
    ).subscribe()
  }

  ngOnInit(): void {
    this.totalUser();
    this.totalProduct();
    this.priceTotalProduct();
  }


}
