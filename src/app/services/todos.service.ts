import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getAllTodos() {
    return this.http.get<Todo[]>('https://localhost:44319/api/todos');
  }
}
