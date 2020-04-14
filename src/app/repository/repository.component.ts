import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Repo } from '../repo';
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
  constructor(public  githubService:GithubRequestService,private http:HttpClient) { }
  

  ngOnInit(): void {
    this.resultCount = 5;
    this.githubService.gitRepos(this.searchRepo);
  }
  getDataFunction() {
    this.githubService.gitRepos(this.searchRepo);

}


}
