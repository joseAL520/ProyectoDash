import { Injectable, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  
  public userList: User[] = [
    {
        "numero": "1234567890",
        "nombre": "Juan Pérez",
        "direccion": "Calle Falsa 123",
        "correo": "juan.perez@example.com",
        "numer": "1234567890",
        "fechaCreation": new Date()
    },
    {
        "numero": "0021231233",
        "nombre": "María Gómez",
        "direccion": "Avenida Siempre Viva 456",
        "correo": "maria.gomez@example.com",
        "numer": "0987654321",
        "fechaCreation": new Date()
    },
    {
        "numero": "0031251351",
        "nombre": "Carlos López",
        "direccion": "Boulevard Central 789",
        "correo": "carlos.lopez@example.com",
        "numer": "1122334455",
        "fechaCreation": new Date()
    }]
  
  getuserList(){

    // temporal hasta que la bsd este lista
    return  this.userList = [
      {
        "numero": "1234567890",
        "nombre": "Juan Pérez",
        "direccion": "Calle Falsa 123",
        "correo": "juan.perez@example.com",
        "numer": "1234567890",
        "fechaCreation": new Date()
    },
    {
        "numero": "0021231233",
        "nombre": "María Gómez",
        "direccion": "Avenida Siempre Viva 456",
        "correo": "maria.gomez@example.com",
        "numer": "0987654321",
        "fechaCreation": new Date()
    },
    {
        "numero": "0031251351",
        "nombre": "Carlos López",
        "direccion": "Boulevard Central 789",
        "correo": "carlos.lopez@example.com",
        "numer": "1122334455",
        "fechaCreation": new Date()
    }

    ] 
  }
  
  addUser( character: User ):void {
    const creatioUserDate = new Date()
    const newUser: User = { fechaCreation: creatioUserDate, ...character}
    this.userList.push(newUser);
  }

  deleteUser( id:string ){
    this.userList = this.userList.filter(
        user=> user.numero !== id
    )
  }

  updateUser(newUser: User): void {
    const index = this.userList.findIndex(user => user.numero === newUser.numero);
    if (index !== -1) {
      this.userList[index] = newUser;
    }
  }

  searchUser( idUser:string ){
    const userSearch = this.userList.filter(  value => value.numero === idUser );
    if( userSearch.length !== 0 ){
      // this.userList[0] = userSearch
      this.userList = userSearch
    }else{
      this.getuserList();
    }
  }

}
