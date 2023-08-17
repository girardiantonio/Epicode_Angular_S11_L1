import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productResponse } from './models/product';
import { Iproduct } from './models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl:string = "https://dummyjson.com/products";

  constructor(private http:HttpClient) { }

  pref: Iproduct[] = []

  getAll():Observable<productResponse> {
    return this.http.get<productResponse>(this.apiUrl);
  }

  addPreferiti(item:Iproduct){
    if(this.pref.includes(item)){
      this.pref = this.pref.filter(x => x !== item);
    }else{
      this.pref.push(item)
    }
    return this.pref
  }

  getPref():Iproduct[]{
    return this.pref
  }

  // create(product:Product):Observable<Product>{
  //   return this.http.post<Product>(this.apiUrl, product);
  // }

  // update(product:Product):Observable<Product>{
  //   return this.http.put<Product>(this.apiUrl+'/'+product.id,product);
  // }

}
