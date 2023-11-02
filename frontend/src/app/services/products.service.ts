import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';


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

  baseUrl: string = "http://localhost:3001/api/v1"

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this._http.get<any>(this.baseUrl + "/products").pipe(
      map(response => {
        if (response.status === "Success" && Array.isArray(response.data)) {
          return response.data as Product[];
        } else {
          throw new Error("Invalid response format");
        }
      })
    );
  }

  getProductById(id: string): Observable<Product> {
    return this._http.get<any>(this.baseUrl + `/products/${id}`).pipe(
      map(response => {
        if (response.status === "Success" && response.data) {
          return response.data as Product;
        } else {
          throw new Error("Invalid response format");
        }
      })
    );
  }

}
