import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Todo } from '../models/todo.model';

const BASE_URL = 'https://localhost:44319/api';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoCompleted = new Subject<void>();

  constructor(private http: HttpClient) { }

  getUncompletedTodos() {
    return this.http.get<Todo[]>(BASE_URL + '/todos');
  }

  getCompletedTodos() {
    return this.http.get<Todo[]>(BASE_URL + '/todos/completed');
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(BASE_URL + '/todos', todo);
  }

  completeTodo(id: number) {

    return this.http
      .post(`${BASE_URL}/todos/${id}/complete`, null)
      .pipe(tap(() => this.todoCompleted.next()));
  }
}
