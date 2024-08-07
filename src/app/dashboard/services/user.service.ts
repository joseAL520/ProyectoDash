import { Injectable, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interfaces';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { enviromentProduct } from './environments/environments.pro';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private url: string = enviromentProduct.urlGetUser;
  private baseUrl:string =enviromentProduct.baseUrlUser;
  private apiKey: string = enviromentProduct.apiKey;
  private auth:string =enviromentProduct.authe;
  public userList: User[] = []
  
  
  constructor(
    private http: HttpClient
  ){}

  getuserList(): Observable<User[]>{
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': this.auth
    })
    return this.http.get<User[]>(this.url,{headers});
  }
  
  addUser( character: User ):Observable<User[]> {
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': this.auth,
      'Content-Type':'application/json'
    })
      return this.http.post<User[]>(this.baseUrl,character,{headers});
  }

  deleteUser( id:string ): Observable<boolean>{
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': this.auth
    })
    return this.http.delete<User>(`${this.baseUrl}?id=eq.${id}`,{headers}).pipe(
      map(rep => true ),
      catchError(err => of (false) )
    )
  }

  updateUser(newUser: User): Observable<User[]> {
    const id = newUser.id
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': this.auth
    })
    return this.http.patch<User[]>(`${this.baseUrl}?id=eq.${id}`,newUser,{headers});
  }

  searchUser( idUser:number ):Observable<User[]>{
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': this.auth
    });
    return this.http.get<User[]>(`${this.baseUrl}?numeroId=eq.${idUser}`, { headers });
  }

}