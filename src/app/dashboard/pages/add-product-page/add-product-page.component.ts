import { Component } from '@angular/core';
import { Productos } from '../../interfaces/produc.interfaces';
import { ProductServicesService } from '../../services/produc.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css'
})
export class AddProductPageComponent {


  constructor(
    private serviceProduct: ProductServicesService
  ){}

  get producList(){
     return this.serviceProduct.producList;
  }

  aggProduct(character: Productos){
    this.serviceProduct.addProduct(character);
  }

  ondeleteUser(id:string):void{
    this.serviceProduct.deleteProduct(id);
  }

}
