import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/interface.user';
// import {mahesh} from '../users.json'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private usersUrl='assets/users.json';
  constructor(private http:HttpClient) { }


  setUser(newUser:User){
    // const jsonData = JSON.stringify(newUser)
    return this.http.put<User>(this.usersUrl, newUser)
  }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl)
  }
}
