import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from '../users';
import { Repo } from '../repo';
import { GithubRequestService} from './../github-request.service'



@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  user:Users;
  repos:Repo;
  userName:string;
  usernewData:any;



  
  constructor( private http:HttpClient ,private githubService:GithubRequestService)  {}

  ngOnInit(): void {
    this.githubService.getUsers();
    this.user= this.githubService.user
    console.log(this.user)

    this.githubService.getRepo(this.userName);
    this.usernewData=this.githubService.newRepodata

    this.githubService.getRepo(this.userName)
    this.repos= this.githubService.repos
  }

}
