import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Productos } from '../../../interfaces/produc.interfaces';

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

 public currentIndex = 0;
 public pageSize = 10;

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




}
