import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../../services/user.service';
import { User } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrl: './add-user-page.component.css'
})
export class AddUserPageComponent implements OnInit {

  public titulo:string = 'Agregar Usuario'
  public userUpdate!: User
  public userList: User[] = []


  constructor(
    private serviceUse: UserServicesService
  ){}
 


  getUserList(){
     return this.serviceUse.getuserList()
        .subscribe( (user) =>{
           this.userList = Object.values(user)
        } );
  }

  aggUser(character: User){
    this.serviceUse.addUser(character).subscribe( () => {
      this.getUserList();
    } );
  }

  ondeleteUser(id:string):void{
    this.serviceUse.deleteUser(id).subscribe( () => {
        this.getUserList();
    });
  }


  // User Update
  byuserUpdateCharacter( character:User ){
    return  this.userUpdate = character 
  }

  userNewUpdate( character:User ){
    this.serviceUse.updateUser(character).subscribe( () => {
        this.getUserList();
    } )
  }

  //Search User
  searchUserByID(id:number){
    if( id){
      this.serviceUse.searchUser(id)
        .subscribe( user => { 
           this.userList = Object.values(user)
         } );
      return
    }else{
       this.getUserList();
    }
  }




  ngOnInit(): void {
    this.getUserList();
  }

}
