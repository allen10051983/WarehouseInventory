import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';


import { ICategory } from '../models/category';

@Injectable()
export class CategoryService{
    private _apiUrl = `http://localhost:59919/api/categories`;
    private _headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http){

    }

    getCategoryById(id: number): Promise<ICategory>{
        return this.http.get(`${this._apiUrl}/${id}`)
            .toPromise()
            .then(category => category.json() as ICategory)
            .catch(this.handleError);
    }


    getCategories(): Promise<ICategory[]>{
        return this.http.get(this._apiUrl)
            .toPromise()
            .then(categories => categories.json() as ICategory[])
            .catch(this.handleError);
    }

    createCategory(category: ICategory): Promise<void> {
        return this.http.post(this._apiUrl, JSON.stringify(category), { headers: this._headers })
            .toPromise()
            .catch(this.handleError);            
    }

    updateCategory(category: ICategory): Promise<void>{
        return this.http.put(`${this._apiUrl}/${category.id}`, 
            JSON.stringify(category), 
            {headers: this._headers})
            .toPromise()
            .catch(this.handleError);
    }

    deleteCategory(category: ICategory): Promise<void> {
        
        return this.http.delete(`${this._apiUrl}/${category.id}`, { headers: this._headers })
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
      }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}