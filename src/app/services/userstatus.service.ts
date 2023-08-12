import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstatusService {

  constructor() { }

  private isUserLoggedIn: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  private currentUserName: BehaviorSubject<string>=new BehaviorSubject<string>("");

  setUserLoggedInStatus(isUserLoggedIn:boolean){
    this.isUserLoggedIn.next(isUserLoggedIn);
  }

  getUserLoggedInStatus():Observable<boolean>{
    return this.isUserLoggedIn.asObservable();
  }


  setCurrentUserName(currentUserName:string){
    this.currentUserName.next(currentUserName);
  }

  getCurrentUserName():Observable<string>{
    return this.currentUserName.asObservable();
  }
}
