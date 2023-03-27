import { Action } from "@ngrx/store";
import { Todo } from "../models/todo.model";

export enum TodoActionType {
    LOAD_TODOS = '[Todo] Load Todos',
    LOAD_TODOS_SUCCESS = '[Todo] Load Todos Success',
    LOAD_TODOS_FIAL = '[Todo] Load Todos',
}

export class LoadUncompletedTodos implements Action {
    readonly type = TodoActionType.LOAD_TODOS;
}

export class LoadUncompletedTodosSuccess implements Action {
    readonly type = TodoActionType.LOAD_TODOS_SUCCESS;

    constructor(public payload: Todo[]) { }
}

export class LoadUncompletedTodosFail implements Action {
    readonly type = TodoActionType.LOAD_TODOS_FIAL;

    constructor(public payload: string) { }
}

export type Actions = LoadUncompletedTodos | LoadUncompletedTodosSuccess | LoadUncompletedTodosFail;