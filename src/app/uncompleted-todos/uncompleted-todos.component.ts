import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-uncompleted-todos',
  templateUrl: './uncompleted-todos.component.html',
  styleUrls: ['./uncompleted-todos.component.scss']
})
export class UncompletedTodosComponent implements OnInit {

  @Output() todoCompleted = new EventEmitter();

  // noneCompletedTodos: Todo[] = [];
  // todos : Observable<Todo[]>|undefined;
  todos: Observable<Todo[]> | undefined;
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
    //this.selectedTodo.completed = true;
    this.todoService.completeTodo(this.selectedTodo.id).subscribe(() => {
      this.loadTodos();
      this.todoCompleted.emit();
    });

  }

  onAdd() {
    if (!this.newTodo) return;
    const myNewTodo: Todo = { id: 0, text: this.newTodo, completed: false };
    // this.todoService.allTodos.push(myNewTodo);
    this.todoService.addTodo(myNewTodo).subscribe(() => {
      this.loadTodos();
    });
  }

  private loadTodos() {
    // this.noneCompletedTodos = this.todoService.allTodos.filter(t => !t.completed);
    this.todos = this.todoService.getUncompletedTodos();
    this.selectedTodo = undefined;
    this.newTodo = '';
  }

}
