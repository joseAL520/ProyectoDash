import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  public userList: User[] = [
    {
      numero: '1234',
      nombre: 'jose',
      direccion: 'call 123',
      correo: 'jose@Gmaiil.com',
      numer: '31231233'
    },
    {
      numero: "12345",
      nombre: "Juan Pérez",
      direccion: "Av. Siempre Viva 742, Springfield",
      correo: "juan.perez@example.com",
      numer: "+1-555-1234"
    }
  ]

  
  addUser( character: User ):void {

    const newUser: User = {...character}
    this.userList.push(newUser);
  }


}
