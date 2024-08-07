import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/produc.interfaces';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { enviromentProduct } from './environments/environments.pro';
 

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService  {


  private url: string = enviromentProduct.urlGet;
  private apiKey: string = enviromentProduct.apiKey;
  private auth:string =enviromentProduct.authe;
  private baseUrl:string =enviromentProduct.baseUrl;



  constructor(
    private http: HttpClient
  ){}

  getProductList(): Observable<Productos[]> {
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': this.auth
    })
    return this.http.get<Productos[]>(this.url, {headers});
  
  }

  addProduct( character:  Productos ): Observable<Productos> {
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': this.auth,
      'Content-Type':'application/json'
    })
    return this.http.post<Productos>(this.baseUrl,character,{headers})
  }

  deleteProduct( id:string ): Observable<boolean> {
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': this.auth
    })

    return this.http.delete<Productos>(`${this.baseUrl}?id=eq.${id}`,{headers})
     .pipe(
        map( resp => true),
        catchError(err => of (false)),
      )
  }

  updateProduct(newProduct: Productos): Observable<Productos[]> {
    const id = newProduct.id
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': this.auth
    })
     return this.http.patch<Productos[]>(`${this.baseUrl}?id=eq.${id}`,newProduct,{headers})
  }

  searchProduct( nameProduct:string ): Observable<Productos[]> {
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': this.auth
    })

    const filter = encodeURIComponent(`%${nameProduct}%`);
    return this.http.get<Productos[]>(`${this.baseUrl}?nombre=ilike.${filter}`,{headers});
  }

}
