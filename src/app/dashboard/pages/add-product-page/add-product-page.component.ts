import { Component } from '@angular/core';
import { Productos } from '../../interfaces/produc.interfaces';
import { ProductServicesService } from '../../services/produc.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css'
})
export class AddProductPageComponent {

  public titulo:string = 'agregar Producto';
  public productUpdate!: Productos

  
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


  // User Update
  byproductUpdateCharacter( character:Productos ){
    return  this.productUpdate = character 
  }

  productNewUpdate( character:Productos ){
    this.serviceProduct.updateProduct(character);
  }

  //Search User
  searchProductByname(name:string){
    this.serviceProduct.searchProduct(name);
  }

}
