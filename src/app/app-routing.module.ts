import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottiComponent } from './pages/prodotti/prodotti.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/prodotti',
    pathMatch: 'full'
  },
  {
    path: 'prodotti',
    component: ProdottiComponent
  },
  {
    path: 'preferiti',
    component: PreferitiComponent
  },
  {
    path: '**',
    redirectTo: '/prodotti'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
