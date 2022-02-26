import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  Genders = ['male', 'female'];
  allUsers :Observable<User[]>; 
userForm :FormGroup;
dataSaved = false;

userIdUpdate = null;
massage = null;
  constructor(private userservice:UserServiceService)
  {

  }
  onSubmit()
  {
    console.log(this.userForm)
    this.dataSaved = false;
    const user = this.userForm.value;
    this.CreateEmployee(user);
    this.userForm.reset();
  }
  CreateEmployee(user: User) {
    if (this.userIdUpdate == null) {
      this.userservice.createUser(user).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = 'Record saved Successfully';
          this.loadAllUsers();
          this.userIdUpdate = null;
          this.userForm.reset();
        }
      );
    } else {
      user.id = this.userIdUpdate;
      this.userservice.updateEmployee(user).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record Updated Successfully';
        this.loadAllUsers();
        this.userIdUpdate = null;
        this.userForm.reset();
      });
    }
  }
 
 

  ngOnInit(): void {
    this.loadAllUsers();
    console.log(this.allUsers)
    this.userForm=new FormGroup({
      'Name':new FormControl(null),
      'Email':new FormControl(null),
      'Gender':new FormControl(null),
      'Username':new FormControl(null),
      'Password':new FormControl(null)
    })
  }

  loadAllUsers()
  {
    this.allUsers=this.userservice.getAllUsers();
  }
}
