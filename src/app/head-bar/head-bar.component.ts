import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent {
  constructor(public ts: TodoService, private router: Router, private authStateServ : AuthService){}
  get localSt(): string|null {
    return this.authStateServ.isAuthenticated ? localStorage.getItem('token') : null;
  }

  
  signOut(){
    localStorage.removeItem("token")
    this.router.navigateByUrl('/signIn')
    window.location.reload()
    this.authStateServ.setAuthenticated(false);
  }

}
