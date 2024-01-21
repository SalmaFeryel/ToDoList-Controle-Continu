import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoTemplateReactiveFormComponent } from './todo-template-reactive-form/todo-template-reactive-form.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';
import { TodoPipe } from './todo.pipe';
import { TodoDirective } from './todo.directive';
import {HttpClientModule} from '@angular/common/http' ;
import { TodoService } from './todo.service';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoTemplateReactiveFormComponent,
    TodoTemplateDrivenFormComponent,
    TodoPipe,
    TodoDirective,
    TodoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", redirectTo: "/todo-list", pathMatch: "full"},
      {path:"signIn", component:TodoTemplateReactiveFormComponent},
      { path: "todo-list", component: TodoListComponent }
    ]),
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
