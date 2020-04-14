import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Search} from '../git-form/search';


@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html',
  styleUrls: ['./git-details.component.css']
})
export class GitDetailsComponent implements OnInit {
  searchInfo = new Search('');
    @Output() getName = new EventEmitter<Search>();

    searchFor(data){
        this.getName.emit(data.value.find);
        console.log(data.value.find)
        data.reset();
    }

 

  constructor() { }

  ngOnInit(): void {
  }

}
