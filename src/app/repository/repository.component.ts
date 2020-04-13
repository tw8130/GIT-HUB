import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from '../users';
import { Repo } from '../repo';
import { FormsModule } from '@angular/forms';
import { GithubRequestService} from './../github-request.service'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
  providers:[GithubRequestService]
})
export class RepositoryComponent implements OnInit {
  user:Users;
  repos:Repo;
  userName:string;
  usernewData:any;

  constructor(private http:HttpClient ,private githubService:GithubRequestService) { }
  GetProfile() {
    this.githubService.updateUser(this.userName);

    this.githubService.getUsers();
  this.user= this.githubService.user
  console.log(this.user);

  this.githubService.getRepo(this.userName);
  this.usernewData=this.githubService.newRepodata;

  }

  ngOnInit(): void {
    this.githubService.getUsers();
    this.user=this.githubService.user

    this.githubService.getRepo(this.userName)
    this.repos= this.githubService.repos
  }

}
