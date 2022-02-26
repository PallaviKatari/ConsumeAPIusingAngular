//HttpClient API service is used to make communication between front-end web apps with backend services. 
//This communication is done over HTTP protocol. 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Observable module
import { Observable } from 'rxjs';
//user.ts class
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
//asp.net web api (the api should be running while consuming from Angular)
  url = 'https://localhost:44352/Api/UserRegistrations';  
  //Will invoke UserRegistrationsController->GetUserRegistrations()
  //GET->Read records
	  constructor(private http: HttpClient) { }  
	  getAllUsers(): Observable<User[]> {  
	    return this.http.get<User[]>(this.url );  
	  }  
	  getEmployeeById(employeeId: string): Observable<User> {  
	    return this.http.get<User>(this.url + '/GetEmployeeDetailsById/' + employeeId);  
	  } 
	  // Will invoke UserRegistrationsController->PostUserRegistration
	  createUser(user: User): Observable<User> {  
	    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
	    return this.http.post<User>(this.url ,  
	    user, httpOptions);  
	  }  
	  updateEmployee(employee: User): Observable<User> {  
	    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
	    return this.http.put<User>(this.url + '/UpdateEmployeeDetails/',  
	    employee, httpOptions);  
	  }  
	  deleteEmployeeById(employeeid: string): Observable<number> {  
	    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
	    return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' +employeeid,  
	 httpOptions);  
	  }  

}
