import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { IProduct } from '../models/product';

@Injectable()
export class ProductService{
    private _apiUrl = `http://localhost:59919/api/products`;
    private _headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}

    GetProducts(): Promise<IProduct[]>{
        return this.http.get(this._apiUrl)
            .toPromise()
            .then(products => products.json())
            .catch(this.handleError);
    }

    GetProductById(id: number): Promise<IProduct>{
        return this.http.get(`${this._apiUrl}/${id}`)
            .toPromise()
            .then(product => product.json())
            .catch(this.handleError);
    }

    SaveProduct(product: IProduct): Promise<void>{
        return this.http.put(`${this._apiUrl}/${product.id}`, JSON.stringify(product), {headers: this._headers})
            .toPromise()
            .catch(this.handleError);
    }

    CreateProduct(product: IProduct): Promise<void>{
        return this.http.post(this._apiUrl, JSON.stringify(product), {headers: this._headers })
            .toPromise()
            .catch(this.handleError);
    }

    DeleteProduct(product: IProduct){
        return this.http.delete(`${this._apiUrl}/${product.id}`)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}