import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UncompletedTodosComponent } from './uncompleted-todos/uncompleted-todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UncompletedTodosComponent,
    CompletedTodosComponent
  ],
  imports: [
    DividerModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ListboxModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
