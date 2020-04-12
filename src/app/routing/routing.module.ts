import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router'

import { AppComponent} from './../app.component'
import  { GitSearchComponent } from '../git-search/git-search.component';
import  { GitDetailsComponent } from '../git-details/git-details.component';
import { RepositoryComponent} from '../repository/repository.component';

const routes:Routes =[
  {path:'users?',component:GitSearchComponent},
  {path:'repo?',component:RepositoryComponent},
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingModule { }
