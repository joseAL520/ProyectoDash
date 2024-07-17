import { Injectable, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private url: string = 'http://localhost:3000'

  public userList: User[] = []
  
  
  constructor(
    private http: HttpClient
  ){}

  getuserList(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/Usuario`);
  }
  
  addUser( character: User ):Observable<User[]> {
    
      return this.http.post<User[]>(`${this.url}/Usuario`,character);
  }

  deleteUser( id:string ): Observable<boolean>{
    return this.http.delete<User>(`${this.url}/Usuario/${id}`).pipe(
      map(rep => true ),
      catchError(err => of (false) )
    )
  }

  updateUser(newUser: User): Observable<User[]> {
      return this.http.patch<User[]>(`${this.url}/Usuario/${newUser.id}/`,newUser);
  }

  searchUser( idUser:string ):Observable<User[]>{
    const params = new HttpParams().set('numeroId',idUser);
      return this.http.get<User[]>(`${this.url}/Usuario/`,{params});
  }

}
