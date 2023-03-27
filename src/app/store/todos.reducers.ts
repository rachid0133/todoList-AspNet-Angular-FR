import { Todo } from "../models/todo.model";
import * as todoAction from "./todos.actions";

export interface TodoState{
    todos: Todo[];
    error: string;
}

export const initialState: TodoState = {
    todos: [],
    error:''
}

export function todosReducer(state= initialState, action: todoAction.Actions):TodoState{

    switch(action.type){
        case todoAction.TodoActionType.LOAD_TODOS:{
           return{
            ...state
           } 
        }
        case todoAction.TodoActionType.LOAD_TODOS_SUCCESS:{
            return{
             ...state,
             todos: action.payload
            } 
         }
         case todoAction.TodoActionType.LOAD_TODOS_FIAL:{
            return{
             ...state,
             todos:[]
            } 
         }
        default:
            return state;
    }

}