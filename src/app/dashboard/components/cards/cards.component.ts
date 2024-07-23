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

  ngOnInit(): void {
    this.totalUser();
    this.totalProduct();
  }


}
