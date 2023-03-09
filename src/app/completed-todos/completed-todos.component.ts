import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent implements OnInit {

  @Input() todos: Observable<Todo[]> | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

}
