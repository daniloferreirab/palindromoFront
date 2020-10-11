import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    //se gatilla desde el input buscar
    searchProducts(word: string) {
        if(word !== ''){
        this.http.get(BASE_URL + routes.products(word)).subscribe( (data : Product[] ) => { 
            this.set(data); 
            this.setWord(word);
        }
        );
    }else{
        this.set([]);
    }
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