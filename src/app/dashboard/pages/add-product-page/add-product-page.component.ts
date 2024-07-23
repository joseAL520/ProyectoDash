import { Component, OnInit } from '@angular/core';
import { Productos } from '../../interfaces/produc.interfaces';
import { ProductServicesService } from '../../services/produc.service';
import { map, tap } from 'rxjs';
import { CodeProdut } from '../../interfaces/codes-interfaces/categoryProductsCode.interfaces';

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
    return this.serviceProduct.getProductList().pipe(
      map( value => {
        return value.map( (product:Productos) => ({
            ...product,
            nameProductCode: CodeProdut[product.categoria] 
        })) 
      }),
      tap(rep => this.productList = rep)
    ).subscribe()
            
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
