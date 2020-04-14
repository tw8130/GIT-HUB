import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {GithubRequestService} from './github-request.service'
import {HttpClientModule} from '@angular/common/http'
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitDetailsComponent } from './git-details/git-details.component';
import { RepositoryComponent } from './repository/repository.component';
import { GitFormComponent } from './git-form/git-form.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GitSearchComponent,
    GitDetailsComponent,
    RepositoryComponent,
    GitFormComponent,
    HighlightDirective,
    DateCountPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    GithubRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
