import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from './users';
import {Repo} from './repo';
import {environment} from '../environments/environment';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user:Users;
  repository:Repo;
  newRepo:any;
  private userName:string;

  private accessToken= '8240c99f32a36ba0d7f11905316ba7209ca03545'

  constructor(private http:HttpClient) {
    this.user= new Users('','','','','',new Date,0,'');
    this.repository= new Repo('','',new Date,'','');
   }
   getUsers() {
     interface ApiResponse {
       login:string;
       bio:string;
       avatar_url:string;
       followers_url:string;
       following_url:string;
       created_at:Date;
       public_repos:number;
       html_url:string;
     }
     let promise = new Promise((resolve,reject)=> {
       this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '?access_token' + environment.apiUrl)
       .toPromise().then(response => {
         this.user.login= response.login;
         this.user.bio= response.bio;
         this.user.avatar_url= response.avatar_url;
         this.user.followers_url= response.followers_url;
         this.user.following_url= response.following_url;
         this.user.created_at= response.created_at;
         this.user.public_repos= response.public_repos;
         this.user.html_url= response.html_url;
         console.log(this.user);

         resolve()

       }),
       error => {
         console.log('An error occurred')

         reject(error)
       };
     })
     return promise;
   }

   getRepo() {
     interface ApiResponse {
       name:string;
       description:string;
       updated_at:Date;
       repo_url:string;
       clone_url:string;

     }
     let promise = new Promise((resolve,reject) => {
       this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '/repos?access_token=' + environment.apiUrl)
       .toPromise().then(response_repo => {
         this.newRepo= response_repo; 

         resolve();

       })
       error => {
         console.log('An error ocurred')

         reject(error)
       }
     })
     return promise
   }

}
 