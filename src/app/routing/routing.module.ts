import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router'
import  { GitSearchComponent } from '../git-search/git-search.component';
import { RepositoryComponent} from '../repository/repository.component';
import {NotFoundComponent} from '../not-found/not-found.component'

// Defining routes
const routes:Routes =[
  {path:'users',component:GitSearchComponent},
  {path:'repos',component:RepositoryComponent},
  {path:'**',component:NotFoundComponent},
  {path:'',redirectTo:'/users',pathMatch:'full'},
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
