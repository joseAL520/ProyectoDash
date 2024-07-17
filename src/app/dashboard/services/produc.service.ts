import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/produc.interfaces';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService  {


  private url: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ){}

  getProductList(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.url}/productos`);
  
  }

  addProduct( character:  Productos ): Observable<Productos> {
    return this.http.post<Productos>(`${this.url}/productos/`,character)
  }

  deleteProduct( id:string ): Observable<boolean> {
    return this.http.delete<Productos>(`${this.url}/productos/${id}`)
     .pipe(
        map( resp => true),
        catchError(err => of (false)),
      )
  }

  updateProduct(newProduct: Productos): Observable<Productos[]> {
     return this.http.patch<Productos[]>(`${this.url}/productos/${newProduct.id}/`,newProduct)
  }

  searchProduct( nameProduct:string ): Observable<Productos[]> {

    const params = new HttpParams().set('nombre',nameProduct);
    return this.http.get<Productos[]>(`${this.url}/productos`,{params});
    
  }

}
