import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // completedTodos: Observable<Todo[]> | undefined;
  constructor() { }

  ngOnInit(): void {
    // this.loadCompletedTodos();
  }


  // ontCompleted() {
  //   //load completed
  //   this.loadCompletedTodos();
  // }

  // private loadCompletedTodos() {
  //   this.completedTodos = this.todoService.getCompletedTodos();
  // }

}
