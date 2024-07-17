import { Component, OnInit } from '@angular/core';
import { Productos } from '../../interfaces/produc.interfaces';
import { ProductServicesService } from '../../services/produc.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css'
})
export class AddProductPageComponent implements OnInit {

  public titulo:string = 'agregar Producto';
  public productUpdate!: Productos;
  public productList: Productos[] =[]

  
  constructor(
    private serviceProduct: ProductServicesService
  ){}
 

  getproducList(){
    return this.serviceProduct.getProductList()
            .subscribe( product => 
                this.productList = Object.values(product)
            );
  }

  aggProduct(character: Productos){
    this.serviceProduct.addProduct(character).subscribe( (newProduct) => {
      if(newProduct){
        this.getproducList()
      }
    });
  }

  ondeleteUser(id:string):void{
    this.serviceProduct.deleteProduct(id).subscribe( () => {
        this.getproducList()
    } );
  }


  // User Update
  byproductUpdateCharacter( character:Productos ){
    return  this.productUpdate = character 
  }

  productNewUpdate( character:Productos ){
    this.serviceProduct.updateProduct(character).subscribe( () => {
        this.getproducList()
    } );
  }

  //Search User
  searchProductByname(name:string){
    if( name.trim() ){
      this.serviceProduct.searchProduct(name)
        .subscribe( product => {
          this.productList = Object.values(product)
        });
      return
    }else{
      this.getproducList()
    }
  }

  ngOnInit(): void {
    this.getproducList()
  }

}
