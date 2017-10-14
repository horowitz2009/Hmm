import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService {
  private productsUrl = environment.apiUrl + 'products';  // URL to web api

  constructor(private http: Http) { }

  getProducts(): Promise<Array<Product>> {
    return this.http
      .get(this.productsUrl)
      .toPromise()
      .then((response) => {
      console.log(response);
      console.log("json:" + response.json());
        return response.json() as Product[];
      })
      .catch(this.handleError);
  }

  getProduct(id: number): Promise<Product> {

    return this.http
      .get(this.productsUrl + "/" + id)
      .toPromise()
      .then((response) => {
        return response.json() as Product;
      })
      .catch(this.handleError);
  }

  save(product: Product): Promise<Product> {
    if (product.id) {
      return this.put(product);
    }
    return this.post(product);
  }

  delete(product: Product): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.productsUrl}/${product.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Product
  private post(product: Product): Promise<Product> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.productsUrl, JSON.stringify(product), { headers: headers })
      .toPromise()
      .then(res => {
          console.log("RESULT: " + res.json());
          const json = res.json();
          if (json.data) 
            return json.data as Product;
          else
            return this.getProduct(json);
        })
      .catch(this.handleError);
  }

  // Update existing Product
  private put(product: Product): Promise<Product> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.productsUrl}/${product.id}`;

    return this.http
      .put(url, JSON.stringify(product), { headers: headers })
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
