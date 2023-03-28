import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { UncompletedTodosComponent } from './uncompleted-todos/uncompleted-todos.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from '../store/todos.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect } from '../store/todos.effect';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



const todoRoutes: Routes = [{ path: "", component: HomeComponent }]

@NgModule({
  declarations: [CompletedTodosComponent,
    UncompletedTodosComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    ListboxModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(todoRoutes),
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodoEffect])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CompletedTodosComponent,
    UncompletedTodosComponent]
})
export class TodosModule { }
