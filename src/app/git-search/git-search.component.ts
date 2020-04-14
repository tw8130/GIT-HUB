import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';
// import {environment} from '../environments/environment';
import { GithubRequestService} from './../github-request.service'





@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  public searchMe = '';
  public githubUser: string;
  
  users: User ;
  repository: Repo;
  public searchRepo: string;
  public resultCount = 12;
  
  
  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }
  


  
  constructor( private http:HttpClient ,private githubService:GithubRequestService,public userRepos: GithubRequestService )  {}


  ngOnInit(): void {
    this.githubService.githubUser(this.searchMe);
      this.users = this.githubService.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }
  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;

}

}









































// this.githubService.getUsers();
//     this.user=this.githubService.user

//     this.githubService.getRepo(this.userName)
//     this.repos= this.githubService.repos
//   }

// GetProfile() {
//   this.githubService.updateUser(this.userName);

//   this.githubService.getUsers();
// this.user= this.githubService.user
// console.log(this.user);

// this.githubService.getRepo(this.userName);
// this.usernewData=this.githubService.newRepodata;

// }