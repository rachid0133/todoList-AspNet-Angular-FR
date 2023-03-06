import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private allTodos: Todo[] = [
    { text: 'text1', completed: false },
    { text: 'text2', completed: false },
    { text: 'text3', completed: false },
    { text: 'text4', completed: false }
  ];

  noneCompletedTodos: Todo[] = [];
  selectedTodo: Todo | undefined;
  newTodo: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadTodos();
  }

  onTodoSelect() {
    if (!this.selectedTodo) return;
    console.log(this.selectedTodo);
  }

  onComplete() {
    if (!this.selectedTodo) return;
    this.selectedTodo.completed = true;
    this.loadTodos();
  }

  onAdd() {
    if (!this.newTodo) return;
    const myNewTodo: Todo = { text: this.newTodo, completed: false };
    this.allTodos.push(myNewTodo);
    this.loadTodos();
  }

  private loadTodos() {
    this.noneCompletedTodos = this.allTodos.filter(t => !t.completed);
  }

}
