import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import * as todoAction from "./todos.actions";
import * as fromRoot from "../app.state";
import { EntityState, createEntityAdapter, EntityAdapter } from "@ngrx/entity";


export interface TodoState {
    todos: Todo[];
    // loading: boolean;
    // loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    todos: TodoState;
}

// export const defaultAdapter: TodoState = {
//     ids: [],
//     entities: {},
//     completed: false,
//     loading: false,
//     loaded: false,
//     error: ''
// }

// export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();
// export const todoCompletedAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

// export const initialState = todoAdapter.getInitialState(defaultAdapter);
export const initialState: TodoState = {
    todos: [],
    error:''
}

export function todosReducer(state = initialState, action: todoAction.Actions): TodoState {

    switch (action.type) {
        // case todoAction.TodoActionType.LOAD_TODOS:{
        //    return{
        //     ...state
        //    } 
        // }
        case todoAction.TodoActionType.LOAD_TODOS_SUCCESS: {
            return{
             ...state,
             todos: action.payload
            } 
           // return todoAdapter.addMany(action.payload, { ...state, loading: false, loaded: true });
        }
        case todoAction.TodoActionType.LOAD_TODOS_FIAL: {
            return {
                ...state,
                // loading: false,
                // loaded: false,
                error: action.payload
            }
        }
        // case todoAction.TodoActionType.CREATE_UNCOMPLETED_TODO:{
        //     return{
        //      ...state,
        //      //todos : state.todos.concat(action.payload)
        //     } 
        //  }
        case todoAction.TodoActionType.CREATE_UNCOMPLETED_TODO_SUCCESS: {
            return{
                ...state,
            todos : state.todos.concat(action.payload)
            } 
            // return todoAdapter.addOne(action.payload, state);
        }
        case todoAction.TodoActionType.CREATE_UNCOMPLETED_TODO_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }
        case todoAction.TodoActionType.CREATE_COMPLETED_TODO:{
            return{
             ...state,
             //todos : state.todos.concat(action.payload)
            } 
         }
        case todoAction.TodoActionType.CREATE_COMPLETED_TODO_SUCCESS: {
            return{
                ...state,
            todos : state.todos.concat(action.payload)
            } 
        }
        case todoAction.TodoActionType.CREATE_COMPLETED_TODO_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }
        case todoAction.TodoActionType.LOAD_COMPLETED_TODOS: {
            return{
                ...state,
               } 
        }
        case todoAction.TodoActionType.LOAD_COMPLETED_TODOS_SUCCESS: {
            return{
                ...state,
                todos: state.todos.concat(action.payload)
               } 
            // return todoCompletedAdapter.addMany(action.payload, {...state, completed: true});
        }
        case todoAction.TodoActionType.LOAD_COMPLETED_TODOS_FIAL: {
            return {
                ...state,
                // loading: false,
                // loaded: false,
                error: action.payload
            }
        }
        default:
            return state;
    }

}

const getUncompletedTodoFeatureState = createFeatureSelector<TodoState>('todos');
export const getUncompletedTodosSelect = createSelector(getUncompletedTodoFeatureState, (state:TodoState)=>state.todos.filter(c => c.completed!==true));

// export const getCompletedTodosSelect = createSelector(getUncompletedTodoFeatureState, todoCompletedAdapter.getSelectors().selectAll);
export const getCompletedTodosSelect = createSelector(getUncompletedTodoFeatureState, (state:TodoState)=>state.todos.filter(c => c.completed==true));

