import { Component } from '@angular/core';
import { UserstatusService } from '../../services/userstatus.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  existingUser:any;

  constructor(private userStatus:UserstatusService){
    this.userStatus.getUserLoggedInStatus().subscribe((existingUser) =>{
      this.existingUser =existingUser;
    });
  }
  
}


