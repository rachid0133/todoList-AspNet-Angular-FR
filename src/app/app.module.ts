import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
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
