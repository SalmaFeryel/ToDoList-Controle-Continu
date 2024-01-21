import { Component, Input } from '@angular/core';
import {faCheck } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
faCheck = faCheck;
@Input() todo!:Todo
constructor(public ts:TodoService){}
updateDone(todo:Todo)
{
  todo.done=!todo.done;
  this.ts.updateTodo(todo).subscribe(res=>this.todo=res);
}
}
