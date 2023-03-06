import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  allTodos: Todo[] = [
    { text: 'text1', completed: false },
    { text: 'text2', completed: false },
    { text: 'text3', completed: false },
    { text: 'text4', completed: false }
  ];
  constructor() { }
}
