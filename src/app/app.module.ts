import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { SidebarModule } from 'ng-sidebar';
import { InstagramService } from './services/instagram.service';
import { HttpClientModule } from '@angular/common/http';
import { PageReferencesComponent } from './page-references/page-references.component';


@NgModule({
  declarations: [
    AppComponent,
    PageAboutComponent,
    PageHomeComponent,
    PageContactComponent,
    PageReferencesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [
    InstagramService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
