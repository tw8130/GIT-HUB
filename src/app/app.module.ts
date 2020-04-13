import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitDetailsComponent } from './git-details/git-details.component';
import { RepositoryComponent } from './repository/repository.component';
import { GitFormComponent } from './git-form/git-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GitSearchComponent,
    GitDetailsComponent,
    RepositoryComponent,
    GitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
