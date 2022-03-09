import { Component, OnInit } from '@angular/core';
//Observable module to Observables provide support for passing messages between 
//parts of your application. They are used frequently in Angular and are 
//the recommended technique for event handling, 
//asynchronous programming, and handling multiple values.
import { Observable } from 'rxjs';
//import user.ts
import { User } from '../user';
//importuser-service.service.ts
import { UserServiceService } from '../user-service.service';
//import for Form designing in Angular
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {
  //u:User;
  userForm: FormGroup;
  constructor(private userservice:UserServiceService)
  {

  }
  ngOnInit(): void {   
  ({    
    'Username':new FormControl(null),
    'Password':new FormControl(null)
  })  
  }
  onSubmit()
  {
    console.log(this.userForm);
    const user = this.userForm.value;
    this.Login(user);
    
  }
  Login(user:User)
  {
    this.userservice.Login(user.Username,user.Password).subscribe(
      () =>{
    if((user.Username == "abc" && user.Password=="123"))
    {
      alert("Success");
    }
  }
    );
  }
  

}
