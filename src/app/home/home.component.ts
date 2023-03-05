import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [
    { text: 'text1' },
    { text: 'text2' },
    { text: 'text3' },
    { text: 'text4' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
