import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    // HTTPClientModule
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    // publish...
    return this.http.get<Product[]>(this.baseUrl + 'products'); // HttpClient -- returns an Observable -- state change
  }

  saveOrder(order: Order): Observable<Order> {
    // publish...
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  saveProduct(product: Product): Observable<Product> {
    // publish
    return this.http.post<Product>(this.baseUrl + 'products', product); // state change
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseUrl}products/${product.id}`,
      product
    );
  }

  deleteProduct(id?: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}products/${id}`);
  }
}

// Angular Network/AJAX calls are optional !
