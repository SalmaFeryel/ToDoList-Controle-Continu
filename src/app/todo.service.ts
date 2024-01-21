import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  showTodoDialog=false;
  showUpdateDialog = false;
  showAddDialog = false;
  
  constructor(private httpC : HttpClient) { }
  getToDoList(): Observable <Todo[]> {
   return this.httpC.get<Todo[]>("http://localhost:3000/todos")
  }
  deleteTodo(todo:Todo): Observable<Todo[]> {
    return this.httpC.delete<Todo[]>(`http://localhost:3000/todos/${todo.id}`)
   }
  getTodoById(todo:Todo): Observable <Todo> {
    return this.httpC.get<Todo>(`http://localhost:3000/todos/${todo.id}`)
   }
  updateTodo(todo:Todo): Observable<Todo>{
    return this.httpC.put<Todo>(`http://localhost:3000/todos/${todo.id}`,todo);
  }
  addTodo(todo:Todo): Observable<Todo[]>{
    return this.httpC.post<Todo[]>(`http://localhost:3000/todos/`,todo);
  }
}

