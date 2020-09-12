import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';


const routes: Routes = [
  {
    path: 'home',
    component: AccueilComponent
  },
  {
    path: 'qui',
    component: QuiSommesNousComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
