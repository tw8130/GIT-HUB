import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import {environment} from '../environments/environment';
import { Repo } from './repo';


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  repository: Repo;
  users: User;
  newRepository: any;
  searchRepo: any;
 
  private accessToken= '8240c99f32a36ba0d7f11905316ba7209ca03545'
   constructor(private http:HttpClient) {
    this.repository = new Repo('','',new Date(),'','');
    this.users = new User('','','','','',new Date(),0,'');
   }


   githubUser(searchName) {
    interface ApiResponse {
        html_url: string;
        description: string;
        created_at: Date;
        login: string;
        public_repos: number;
        followers_url: string;
        following_url: string;
        avatar_url: string;
        bio:string
    }

    const promise = new Promise((resolve) => {
        this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?access_token=' + environment.apiUrl).toPromise().then(getResponse => {
            this.users.bio = getResponse.bio;
            this.users.html_url = getResponse.html_url;
            this.users.login = getResponse.login;
            this.users.avatar_url = getResponse.avatar_url;
            this.users.public_repos = getResponse.public_repos;
            this.users.created_at = getResponse.created_at;
            this.users.followers_url = getResponse.followers_url;
            this.users.following_url = getResponse.following_url;
            resolve();
        },);
    });
    return promise;

}

gitUserRepos(searchMe) {
    interface ApiResponse {
        name: string;
        description: string;
        updated_at: Date;
        repo_url:string;
        clone_url:string;
    }

    const myPromise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>('https://api.github.com/users/' + searchMe + '/repos?order=created&sort=asc?access_token=' + environment.apiUrl).toPromise().then(getRepoResponse => {
            this.newRepository = getRepoResponse;
            resolve();
        }, error => {
            reject(error);
        });
    });
    return myPromise;
}


gitRepos(searchName) {
    interface ApiResponse {
        items: any;
    }

    const promise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' + environment.apiUrl).toPromise().then(getRepoResponse => {
            this.searchRepo = getRepoResponse.items;

            resolve();
        }, error => {
            this.searchRepo = 'error';
            reject(error);
        });
    });
    return promise;
}
   
  }

 