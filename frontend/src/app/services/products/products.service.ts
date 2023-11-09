import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { PRODUCTS } from "../../data/mock-products"
import { environment } from '../../../environments/environment';

/*
  Decorate our class with @Injectable
  Means that other services/components can inject this service
*/
@Injectable(
  // Specify that this service should be available at the root level
    // Can be changed to other levels
  {
  providedIn: 'root'
})

export class ProductsService {

  baseUrl: string = environment.apiUrl; 

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    if (environment.useApi) {
      return this._http.get<any>(this.baseUrl + "/products").pipe(
            map(response => {
              console.log("response", response)
              if (response.statusCode === 200 && Array.isArray(response.data)) {
                return response.data as Product[];
              } else {
                throw new Error("Invalid response format");
              }
            }),
            catchError(error => {
              console.error('An error occurred:', error);
              return throwError(() =>error);
            })
          );
    } else {
      // Using 'of' creates an observable of the mock product data
      return of(PRODUCTS)

    }
  }
  getProductById(id: number): Observable<Product> {

    if (environment.useApi) {
      return this._http.get<any>(this.baseUrl + `/products/${id}`).pipe(
        map(response => {
          console.log("response", response)
          if (response.statusCode === 200  && response.data) {
            return response.data as Product;
          } else {
            throw new Error("Invalid response format");
          }
        }), 
        catchError(error => {
          console.error('An error occurred:', error);
          return throwError(() =>error);
        })
      );
    } else {
      const product = PRODUCTS.find((p: Product) => p.id === id)
      if(!product) throw new Error(`Product with id: ${id} not found`)
      // Using 'of' creates an observable of the mock product data
      return of(product)
    }
  }
}
