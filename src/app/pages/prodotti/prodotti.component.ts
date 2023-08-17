import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent {

  prodotti: Iproduct[] = [];
  carrello: Iproduct[] = [];
  preferiti: Iproduct[] = [];
  totale:number = 0;
  currentRoute: string;

  constructor( private productSvc: ProductsService,
    private route: ActivatedRoute) {
      this.currentRoute = this.route.snapshot.url.join('/')
    }

  ngOnInit() {
    this.productSvc.getAll()
    .subscribe(products => this.prodotti = products.products);
  }

  shop(item:Iproduct){
    this.carrello.push(item);
    this.totale += item.price;
    console.log(this.carrello);
    }

  remove(item:Iproduct, index:number){
    this.carrello.splice(index,1);
    this.totale -= item.price
  }

  addPref(item:Iproduct){
    this.preferiti = this.productSvc.addPreferiti(item)
    this.isPresent(item)
  }

  isPresent(item:Iproduct):boolean{
    return this.preferiti.includes(item);
  }

}
