import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of, switchMap } from "rxjs";
import { Todo } from "../models/todo.model";
import { TodosService } from '../services/todos.service';
import * as todoActions from '../store/todos.actions'


@Injectable()
export class TodoEffect {
    constructor(private action$: Actions, private todoService: TodosService) { }

    loadTodos$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType<todoActions.LoadUncompletedTodos>(todoActions.TodoActionType.LOAD_TODOS),
        mergeMap(() =>
            this.todoService.getUncompletedTodos().pipe(
                map((todos: Todo[]) => new todoActions.LoadUncompletedTodosSuccess(todos)),
                catchError(err => of(new todoActions.LoadUncompletedTodosFail(err)))
            )),
    ));

    createTodo$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(todoActions.CreateTodo),
        map((action) => action.payload),
        mergeMap((todo) =>
            this.todoService.addTodo(todo).pipe(
                map((nTodo) => new todoActions.CreateTodoSuccess(nTodo)),
                catchError(err => of(new todoActions.CreateTodoFail(err)))
            ))
    ));


    createCompletedTodo$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType<todoActions.CreateCompletedTodo>(todoActions.TodoActionType.CREATE_COMPLETED_TODO),
        map((action) => action.payload),
        mergeMap((todo) =>
            this.todoService.completeTodo(todo.id).pipe(
                map((nTodo:any) => new todoActions.CreateCompletedTodoSuccess(nTodo)),
                catchError(err => of(new todoActions.CreateTodoFail(err)))
            ))
    ));

    loadCompletedTodos$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType<todoActions.LoadCompletedTodos>(todoActions.TodoActionType.LOAD_COMPLETED_TODOS),
        mergeMap(() =>
            this.todoService.getCompletedTodos().pipe(
                map((todos: Todo[]) => new todoActions.LoadCompletedTodosSuccess(todos)),
                catchError(err => of(new todoActions.LoadCompletedTodosFail(err)))
            )),
    ));
}