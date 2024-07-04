import { Component, Input } from '@angular/core';
import { User } from '../../../interfaces/user.interfaces';

@Component({
  selector: 'list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {

 @Input()
 public personList: User[] = [];


 public currentIndex = 0;
 public pageSize = 10;

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

}
