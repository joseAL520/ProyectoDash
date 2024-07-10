import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  public userList: User[] = [
    {
        "numero": "001",
        "nombre": "Juan Pérez",
        "direccion": "Calle Falsa 123",
        "correo": "juan.perez@example.com",
        "numer": "1234567890",
        "fechaCreation": new Date()
    },
    {
        "numero": "002",
        "nombre": "María Gómez",
        "direccion": "Avenida Siempre Viva 456",
        "correo": "maria.gomez@example.com",
        "numer": "0987654321",
        "fechaCreation": new Date()
    },
    {
        "numero": "003",
        "nombre": "Carlos López",
        "direccion": "Boulevard Central 789",
        "correo": "carlos.lopez@example.com",
        "numer": "1122334455",
        "fechaCreation": new Date()
    }

  ]

  
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

}
