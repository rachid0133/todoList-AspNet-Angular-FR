import { state } from "@angular/animations";
import { Todo } from "../models/todo.model";
import * as todoAction from "./todos.actions";

export interface TodoState{
    todos: Todo[];
}

export const initialState: TodoState = {
    todos: []
}

export function todosReducer(state= initialState, action: todoAction.Actions){
    switch(action.type){
        case todoAction.TodoActionType.LOAD_TODOS:{
           return{
            ...state
           } 
        }
    }

}