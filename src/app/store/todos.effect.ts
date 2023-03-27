import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { Todo } from "../models/todo.model";
import {TodosService} from '../services/todos.service';
import * as todoActions from '../store/todos.actions'


@Injectable()
export class TodoEffect{
    constructor(private action$:Actions, private todoService:TodosService){}

    loadTodos$: Observable<Action> = createEffect(()=> this.action$.pipe(
        ofType<todoActions.LoadUncompletedTodos>(todoActions.TodoActionType.LOAD_TODOS),
        mergeMap(()=>
        this.todoService.getUncompletedTodos().pipe(
            map((todos: Todo[])=> new todoActions.LoadUncompletedTodosSuccess(todos)),
            catchError(err => of(new todoActions.LoadUncompletedTodosFail(err)))
        )),
    ));
}