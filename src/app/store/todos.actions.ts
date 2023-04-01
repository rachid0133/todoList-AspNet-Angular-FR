import { Action, createAction, props } from "@ngrx/store";
import { Todo } from "../models/todo.model";

export enum TodoActionType {
    LOAD_TODOS = '[Todo] Load Todos',
    LOAD_TODOS_SUCCESS = '[Todo] Load Todos Success',
    LOAD_TODOS_FIAL = '[Todo] Load Todos Fail',
    CREATE_UNCOMPLETED_TODO = '[Todo] Create Uncompleted Todo',
    CREATE_UNCOMPLETED_TODO_SUCCESS = '[Todo] Create Uncompleted Todo Success',
    CREATE_UNCOMPLETED_TODO_FAIL = '[Todo] Create Uncompleted Todo Fail',
    CREATE_COMPLETED_TODO = '[Todo] Create completed Todo',
    CREATE_COMPLETED_TODO_SUCCESS = '[Todo] Create completed Todo Success',
    CREATE_COMPLETED_TODO_FAIL = '[Todo] Create completed Todo Fail',
    LOAD_COMPLETED_TODOS = '[Todo] Load completed Todos',
    LOAD_COMPLETED_TODOS_SUCCESS = '[Todo] Load completed Todos Success',
    LOAD_COMPLETED_TODOS_FIAL = '[Todo] Load completed Todos Fail',
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

// export class CreateTodo implements Action {
//     readonly type = TodoActionType.CREATE_UNCOMPLETED_TODO;
//     constructor(public payload: Todo) { }
// }

export const CreateTodo = createAction(TodoActionType.CREATE_UNCOMPLETED_TODO, props<{ payload: Todo }>());

export class CreateTodoSuccess implements Action {
    readonly type = TodoActionType.CREATE_UNCOMPLETED_TODO_SUCCESS;
    constructor(public payload: Todo) { }
}


export class CreateTodoFail implements Action {
    readonly type = TodoActionType.CREATE_UNCOMPLETED_TODO_FAIL;
    constructor(public payload: string) { }
}

export class CreateCompletedTodo implements Action {
    readonly type = TodoActionType.CREATE_COMPLETED_TODO;
    constructor(public payload: Todo) { }
}

export class CreateCompletedTodoSuccess implements Action {
    readonly type = TodoActionType.CREATE_COMPLETED_TODO_SUCCESS;
    constructor(public payload: Todo) { }
}


export class CreateCompletedTodoFail implements Action {
    readonly type = TodoActionType.CREATE_COMPLETED_TODO_FAIL;
    constructor(public payload: string) { }
}

export class LoadCompletedTodos implements Action {
    readonly type = TodoActionType.LOAD_COMPLETED_TODOS;
}

export class LoadCompletedTodosSuccess implements Action {
    readonly type = TodoActionType.LOAD_COMPLETED_TODOS_SUCCESS;

    constructor(public payload: Todo[]) { }
}

export class LoadCompletedTodosFail implements Action {
    readonly type = TodoActionType.LOAD_COMPLETED_TODOS_FIAL;

    constructor(public payload: string) { }
}

export type Actions = LoadUncompletedTodos | LoadUncompletedTodosSuccess | LoadUncompletedTodosFail |
    CreateTodoSuccess | CreateTodoFail | CreateCompletedTodo | CreateCompletedTodoSuccess | CreateCompletedTodoFail |
    LoadCompletedTodos | LoadCompletedTodosSuccess | LoadCompletedTodosFail; //CreateTodo