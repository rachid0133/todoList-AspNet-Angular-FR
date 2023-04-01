import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodosService } from '../../services/todos.service';
import * as todoActions from '../../store/todos.actions';
import * as fromState from '../../store/todos.reducers';

@Component({
  selector: 'app-uncompleted-todos',
  templateUrl: './uncompleted-todos.component.html',
  styleUrls: ['./uncompleted-todos.component.scss']
})
export class UncompletedTodosComponent implements OnInit {

  //@Output() todoCompleted = new EventEmitter();

  // noneCompletedTodos: Todo[] = [];
  //todos : Todo[] = [];
  todos$: Observable<Todo[]> | undefined;
  selectedTodo: Todo | undefined;
  // newTodo: string = '';

  todoForm = new FormGroup({
    newTodo: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private todoService: TodosService, private store: Store<fromState.AppState>) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      newTodo: ["", Validators.required]
    });
    this.store.dispatch(new todoActions.LoadUncompletedTodos());
    //this.store.subscribe(data => this.todos = data.todos);

    this.loadTodos();
  }

  onTodoSelect() {
    if (!this.selectedTodo) return;
    console.log(this.selectedTodo);
  }

  onComplete() {
    if (!this.selectedTodo) return;
    //this.selectedTodo.completed = true;
    // this.todoService.completeTodo(this.selectedTodo.id).subscribe(() => {
    //   this.loadTodos();
    //   //this.todoCompleted.emit();
    // });
    //const selectedOne: Todo = {id: this.selectedTodo.id, text: this.selectedTodo.text, completed: this.selectedTodo.completed}
    this.store.dispatch(new todoActions.CreateCompletedTodo(this.selectedTodo));
    this.loadTodos();

  }

  onAdd() {
    // if (!this.newTodo) return;
    const myNewTodo: Todo = { id: 0, text: this.todoForm.get('newTodo')!.value, completed: false };
    // this.todoService.allTodos.push(myNewTodo);
    // this.todoService.addTodo(myNewTodo).subscribe(() => {
    //   this.loadTodos();
    // });

    this.store.dispatch(todoActions.CreateTodo({ payload: myNewTodo }));
    this.loadTodos();


  }

  private loadTodos() {
    // this.noneCompletedTodos = this.todoService.allTodos.filter(t => !t.completed);
    //this.todos = this.todoService.getUncompletedTodos();
    this.todos$ = this.store.pipe(select(fromState.getUncompletedTodosSelect));
    this.selectedTodo = undefined;
    // this.newTodo = '';
    this.todoForm.reset();
  }

}
