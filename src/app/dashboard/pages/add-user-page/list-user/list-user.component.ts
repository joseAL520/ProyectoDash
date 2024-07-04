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

}
