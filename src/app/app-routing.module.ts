import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageContactComponent } from "./page-contact/page-contact.component";
import { PageAboutComponent } from './page-about/page-about.component';
import { PageReferencesComponent } from './page-references/page-references.component';


const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'contact',
    component: PageContactComponent,
  },
  {
    path: 'about',
    component: PageAboutComponent
  },
  {
    path: 'references',
    component: PageReferencesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
