import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Search} from '../git-form/search';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
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
