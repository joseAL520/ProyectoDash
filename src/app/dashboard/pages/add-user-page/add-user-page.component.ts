import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../../services/user.service';
import { User } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrl: './add-user-page.component.css'
})
export class AddUserPageComponent {

  public titulo:string = 'Agregar Usuario'
  public userUpdate!: User


  constructor(
    private serviceUse: UserServicesService
  ){}


  get userList(){
     return this.serviceUse.userList;
  }

  aggUser(character: User){
    this.serviceUse.addUser(character);
  }

  ondeleteUser(id:string):void{
    this.serviceUse.deleteUser(id);
  }


  // User Update
  byuserUpdateCharacter( character:User ){
    return  this.userUpdate = character 
  }

  userNewUpdate( character:User ){
    this.serviceUse.updateUser(character)
  }

  //Search User
  searchUserByID(id:string){
    this.serviceUse.searchUser(id);
  }

}
