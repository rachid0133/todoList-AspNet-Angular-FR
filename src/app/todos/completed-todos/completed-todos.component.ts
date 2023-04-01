import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodosService } from '../../services/todos.service';
import * as fromState from '../../store/todos.reducers';
import * as todoActions from '../../store/todos.actions';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent implements OnInit {

  todos$_: Observable<Todo[]> | undefined;

  constructor(private todoService: TodosService, private store: Store<fromState.AppState>) {
  }

  ngOnInit(): void {
    // this.loadCompletedTodos();
    // this.todoService.todoCompleted.subscribe(() => {
    //   this.loadCompletedTodos();
    // });
    this.store.dispatch(new todoActions.LoadCompletedTodos());
    this.loadCompletedTodos();
  }
  private loadCompletedTodos() {
    // this.todos = this.todoService.getCompletedTodos();
    this.todos$_ = this.store.pipe(select(fromState.getCompletedTodosSelect));
  }
}
