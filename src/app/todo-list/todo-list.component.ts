import { Component, OnInit } from '@angular/core';
import { faTrash,faList,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
faTrash=faTrash;
faList=faList;
faPenToSquare=faPenToSquare;
selectedTodo!:Todo;
todos!:Todo[];
constructor(public ts: TodoService, private router:Router){
  if(!localStorage.getItem('token'))
     router.navigateByUrl('/signIn')
}
  ngOnInit(): void 
  {
   this.ts.getToDoList().subscribe(Response=>this.todos=Response);
  }

  delete_todo(todo:Todo)
  {
    this.ts.deleteTodo(todo).subscribe(Response=>{this.todos=Response
    this.ngOnInit();
    });
  }
  selectTodo(todo:Todo){
    this.ts.getTodoById(todo).subscribe(Res=>this.selectedTodo=Res)
    this.ts.showTodoDialog=true;
  }

}
