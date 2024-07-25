import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../interfaces/user.interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {

 @Input()
 public personList: User[] = [];

 @Output()
 public oneDelete: EventEmitter<string> = new EventEmitter();

 @Output()
 public userUpdate: EventEmitter<User> = new EventEmitter();

 @Output()
 public searchUserId: EventEmitter<string> = new EventEmitter()

 public currentIndex = 0;
 public pageSize = 10;

 public myFom: FormGroup = this.fb.group({idBuscador:['']})
 
 public isModalOpen = false;
 infoModal: any[] = [];

 constructor(
    private fb: FormBuilder
 ){}

  next(){
    this.currentIndex += this.pageSize;
    this.personList;
  }

  previous() {
    this.currentIndex -= this.pageSize;
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    this.personList;
  }

  onDeleterUser(id:string){
    this.oneDelete.emit(id);
  }

  updateUserById( person:User ){
    this.userUpdate.emit( person );
  }

  searchUser(){
    const userId = this.myFom.value.idBuscador;
    this.searchUserId.emit(userId);
  }


  openModalInfo<T>(productfo: T):void {
    
    if(this.infoModal.length > 0){
        this.infoModal.pop()
    }


    this.infoModal.push(productfo)
    this.isModalOpen = true;
  }

  closeModalInfo() {
    this.isModalOpen = false;
  }

}
