import { Component } from '@angular/core';
import { UserstatusService } from '../../services/userstatus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  existingUser: boolean=false;
  userName:any;

  constructor(private userStatus:UserstatusService){
    this.userStatus.getUserLoggedInStatus().subscribe((currentUser) =>{
      this.existingUser =currentUser;
    });
    this.userStatus.getCurrentUserName().subscribe((userName) =>{
      this.userName=userName;
    })
  } 



  LogOut(){
      this.userStatus.setUserLoggedInStatus(false);
      this.userStatus.setCurrentUserName("");
  }
}
