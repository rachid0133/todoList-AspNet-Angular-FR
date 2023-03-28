import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent implements OnInit {

  todos: Observable<Todo[]> | undefined;

  constructor(private todoService: TodosService) {
  }

  ngOnInit(): void {
    this.loadCompletedTodos();
    this.todoService.todoCompleted.subscribe(() => {
      this.loadCompletedTodos();
    });
  }
  private loadCompletedTodos() {
    this.todos = this.todoService.getCompletedTodos();
  }
}
