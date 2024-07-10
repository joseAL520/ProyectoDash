import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Productos } from '../../../interfaces/produc.interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

 @Input()
 public productList: Productos[] = [];

 @Output()
 public oneDelete: EventEmitter<string> = new EventEmitter();

 @Output()
 public productUpdate: EventEmitter<Productos> = new EventEmitter();

 @Output()
 public productProductName: EventEmitter<string> = new EventEmitter()

 public currentIndex = 0;
 public pageSize = 10;


 public myFom: FormGroup = this.fb.group({ nameBuscador:[''] })

 constructor(
    private fb: FormBuilder
 ){}

  next(){
    this.currentIndex += this.pageSize;
    this.productList;
  }

  previous() {
    this.currentIndex -= this.pageSize;
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    this.productList;
  }


  onDeleterUser(id:string){
    this.oneDelete.emit(id);
  }


  updateProductById( prodcut:Productos ){
    this.productUpdate.emit( prodcut );
  }

  searchProduct(){
    const userId = this.myFom.value.nameBuscador;
    this.productProductName.emit(userId);
  }

}
