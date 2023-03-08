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

  // noneCompletedTodos: Todo[] = [];
  // todos : Observable<Todo[]>|undefined;
  todos : Observable<Todo[]>|undefined;
  selectedTodo: Todo | undefined;
  newTodo: string = '';

  constructor(private todoService: TodosService) { }

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
    // this.todoService.allTodos.push(myNewTodo);
    this.loadTodos();
  }

  private loadTodos() {
    // this.noneCompletedTodos = this.todoService.allTodos.filter(t => !t.completed);
    this.todos = this.todoService.getAllTodos();
    this.selectedTodo = undefined;
    this.newTodo = '';
  }

}
