import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { Repo } from '../repo';
import { User } from '../user';
import { GithubRequestService} from './../github-request.service'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
})
export class RepositoryComponent implements OnInit {
  repository: Repo;
  public searchRepo: string;
  public resultCount = 12;

  searchRepos() {
      this.searchRepo = '';
      this.resultCount = 10;
      this.getDataFunction();
  }
  public searchMe = '';
  public githubUser: string;
  
  users: User ;
 
  
  
  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }
  


  constructor(public  githubService:GithubRequestService, public userRepos: GithubRequestService) { }
  

  ngOnInit(): void {
    this.resultCount = 5;
    this.githubService.gitRepos(this.searchRepo);

    this.githubService.githubUser(this.searchMe);
      this.users = this.githubService.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }
  getDataFunction() {
    this.githubService.gitRepos(this.searchRepo);

}

// searchRepos() {
//   this.searchRepo = '';
//   this.resultCount = 10;

// }


}
