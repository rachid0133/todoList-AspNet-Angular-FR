import { Action } from "@ngrx/store";
import { Todo } from "../models/todo.model";

export enum TodoActionType {
    LOAD_TODOS = '[Todo] Load Todos',
    LOAD_TODOS_SUCCESS = '[Todo] Load Todos Success',
    LOAD_TODOS_FIAL = '[Todo] Load Todos Fail',
    CREATE_UNCOMPLETED_TODO = '[Todo] Create Uncompleted Todo',
    CREATE_UNCOMPLETED_TODO_SUCCESS = '[Todo] Create Uncompleted Todo Success',
    CREATE_UNCOMPLETED_TODO_FAIL = '[Todo] Create Uncompleted Todo Fail',
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

export class CreateTodo implements Action {
    readonly type = TodoActionType.CREATE_UNCOMPLETED_TODO;
    constructor(public payload: Todo) { }
}

export class CreateTodoSuccess implements Action {
    readonly type = TodoActionType.CREATE_UNCOMPLETED_TODO_SUCCESS;
    constructor(public payload: Todo) { }
}

export class CreateTodoFail implements Action {
    readonly type = TodoActionType.CREATE_UNCOMPLETED_TODO_FAIL;
    constructor(public payload: string) { }
}

export type Actions = LoadUncompletedTodos | LoadUncompletedTodosSuccess | LoadUncompletedTodosFail |
    CreateTodo | CreateTodoSuccess | CreateTodoFail;