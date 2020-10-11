import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';
import { Product } from '../model/product';

const BASE_URL = env.baseUrl;

const routes = {
    products: (word: string) => `products/search/${word}`
}

@Injectable()
export class ConfigService {

    
    private observableProducts = new BehaviorSubject<any>([]);
    private observableWordSearch = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

    searchProducts(word: string) {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          }
        return this.http.get(BASE_URL + 'products/search/'+ word, httpOptions);
    }

    getProducts() {
        return this.observableProducts;
    }

    set(products: Product[]) {
        this.observableProducts.next(products);
    }

    setWord(word: string) {
        this.observableWordSearch.next(word);
    }
    getWordSearch() {
        return this.observableWordSearch;
    }
    
}