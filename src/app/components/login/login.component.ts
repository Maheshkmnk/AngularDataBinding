import { Component } from '@angular/core';
import { User } from '../../interfaces/interface.user';
import { UserstatusService } from '../../services/userstatus.service';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private users:User[]=[];

  constructor(private router:Router,private userData:UserdataService,private userStatus:UserstatusService){
    userData.getUser().subscribe((users => {
      this.users=users;
    }))
  }

   // Template Driven Form code
   onTemplateDriven(formData: any) {
    const user = this.users.find((u) => u.email.toLowerCase() === formData.email.toLowerCase());
    console.log('user',user)
    if (user && user.password == formData.password) {

      // this.existingUser = user.username;
      console.log('Successfully Logged in');
      // this.isLoginShow=false;
      alert("Successfully Logged in")
      this.userStatus.setUserLoggedInStatus(true)
      this.userStatus.setCurrentUserName(user.username);
      this.router.navigate(['/home'])

    } else {
      console.log('Invalid credentials!');
      alert('Invalid credentials!');
    }
  }
}
