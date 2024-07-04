import { Component } from '@angular/core';
import { UserServicesService } from '../../services/user.service';
import { User } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrl: './add-user-page.component.css'
})
export class AddUserPageComponent {

  constructor(
    private serviceUse: UserServicesService
  ){}


  get userList(){
     return this.serviceUse.userList;
  }

  aggUser(character: User){
    this.serviceUse.addUser(character);
  }

}
