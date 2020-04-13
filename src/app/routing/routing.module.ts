import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router'


//Imported Components we will render using our router-outlet 
import  { GitSearchComponent } from '../git-search/git-search.component';
// import  { GitDetailsComponent } from '../git-details/git-details.component';
import { RepositoryComponent} from '../repository/repository.component';

// Defining routes
const routes:Routes =[
  {path:'users?',component:GitSearchComponent},
  {path:'repos?',component:RepositoryComponent},
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
