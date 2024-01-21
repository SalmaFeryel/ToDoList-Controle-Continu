import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-todo-template-reactive-form',
  templateUrl: './todo-template-reactive-form.component.html',
  styleUrls: ['./todo-template-reactive-form.component.css']
})
export class TodoTemplateReactiveFormComponent {
  localSt: boolean = !!localStorage.getItem('token');

constructor(private fb: FormBuilder, private authServ:AuthService, private router:Router){}

authForm = this.fb.group(
  {
    login: ['',Validators.required],
    password: ['',Validators.required]
  }
)
checkLogin(){
  if (this.authForm.value.login && this.authForm.value.password)

  this.authServ.getUser(this.authForm.value.login, this.authForm.value.password).subscribe(result => {
    if(result.length){
      localStorage.setItem("token", result[0].token)
      this.localSt = true;
      this.router.navigateByUrl('todo-list')
      this.authServ.setAuthenticated(true);
      
    }
    else
       alert("Login ou Mot de passe incorrect")
  })
}

}
