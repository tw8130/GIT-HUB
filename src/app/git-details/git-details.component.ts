import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Repo } from '../repo';


@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html',
  styleUrls: ['./git-details.component.css']
})
export class GitDetailsComponent implements OnInit {

  user:Users;
  repos:Repo;

  constructor() { }

  ngOnInit(): void {
  }

}
