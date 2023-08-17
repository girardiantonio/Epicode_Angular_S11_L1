import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent {

  fav: Iproduct[] = []
  testo: string = 'Non ci sono preferiti'

  constructor( private prodSvc: ProductsService) { }

  ngOnInit(){
    this.fav = this.prodSvc.getPref()
  }

  removeFav(index:number){
    this.fav.splice(index,1)
  }

  addPref(item:Iproduct){
    this.fav = this.prodSvc.addPreferiti(item)
    this.isPresent(item)
  }

  isPresent(item:Iproduct):boolean{
    return this.fav.includes(item);
  }

}
