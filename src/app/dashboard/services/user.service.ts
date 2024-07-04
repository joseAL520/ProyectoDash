import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  public userList: User[] = [
    {
      numero: "2",
      nombre: "Ana Martínez",
      direccion: "Calle Falsa 123",
      correo: "ana.martinez@example.com",
      numer: "+34-600-123-456"
  },
  {
      "numero": "23",
      "nombre": "Carlos López",
      "direccion": "Avenida del Sol 45, Madrid",
      "correo": "carlos.lopez@example.com",
      "numer": "+34-600-654-321"
  },
  {
      "numero": "234",
      "nombre": "Luisa Fernández",
      "direccion": "Calle Luna 89, Sevilla",
      "correo": "luisa.fernandez@example.com",
      "numer": "+34-600-987-654"
  },
  {
      "numero": "2345",
      "nombre": "Mario García",
      "direccion": "Plaza Mayor 10, Barcelona",
      "correo": "mario.garcia@example.com",
      "numer": "+34-600-321-987"
  },
  {
      "numero": "23456",
      "nombre": "Elena Rodríguez",
      "direccion": "Calle del Mar 76, Valencia",
      "correo": "elena.rodriguez@example.com",
      "numer": "+34-600-654-987"
  },
  {
      "numero": "234567",
      "nombre": "Pedro Sánchez",
      "direccion": "Avenida de la Paz 12, Málaga",
      "correo": "pedro.sanchez@example.com",
      "numer": "+34-600-789-654"
  },
  {
      "numero": "2345678",
      "nombre": "Sofía Gómez",
      "direccion": "Calle del Río 34, Zaragoza",
      "correo": "sofia.gomez@example.com",
      "numer": "+34-600-123-789"
  },
  {
      "numero": "23456789",
      "nombre": "Javier Martínez",
      "direccion": "Avenida de los Reyes 56, Bilbao",
      "correo": "javier.martinez@example.com",
      "numer": "+34-600-321-654"
  },
  {
      "numero": "2345678910",
      "nombre": "Laura Jiménez",
      "direccion": "Plaza de la Constitución 78, Santander",
      "correo": "laura.jimenez@example.com",
      "numer": "+34-600-987-123"
  },
  {
      "numero": "23456789101",
      "nombre": "Manuel Torres",
      "direccion": "Calle de la Libertad 90, Murcia",
      "correo": "manuel.torres@example.com",
      "numer": "+34-600-456-321"
  }
  ]

  
  addUser( character: User ):void {

    const newUser: User = {...character}
    this.userList.push(newUser);
  }


  deleteUser( id:string ){
    this.userList = this.userList.filter(
        user=> user.numero !== id
    )
  }

}
