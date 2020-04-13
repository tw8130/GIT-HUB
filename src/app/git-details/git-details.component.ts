import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';


@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html',
  styleUrls: ['./git-details.component.css']
})
export class GitDetailsComponent implements OnInit {

  repos:Repo;

  constructor() { }

  ngOnInit(): void {
  }

}
