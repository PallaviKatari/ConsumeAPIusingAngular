import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {

  userForm :FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.userForm);
    
    this.userForm.reset();
  }

}
