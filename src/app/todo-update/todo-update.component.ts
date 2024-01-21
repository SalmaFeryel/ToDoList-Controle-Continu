import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent {
  @Input() todo!: Todo;

  constructor(public ts: TodoService){}

  updateTodo(){
    this.ts.updateTodo(this.todo).subscribe(
      response=> window.location.reload()
    )
    this.ts.showUpdateDialog=false
  }
}
