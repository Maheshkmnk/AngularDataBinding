import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/interface.user';
import { UserstatusService } from '../../services/userstatus.service';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  
   // Reactive Form code
   private users: User[] = [];

  //  existingUser:any;

   myReactiveForm: FormGroup;
   submitted: boolean = false;
   passwordPattern: any =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
 
   constructor(private router:Router,private userData:UserdataService,private userStatus:UserstatusService, private fb: FormBuilder) {
     this.myReactiveForm = fb.group({
       username: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       phone: ['', [Validators.required, Validators.maxLength(10)]],
       password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)],
       ],
     });

     userData.getUser().subscribe((users) =>{
      this.users = users
     });
   }
 
   onReactive() {
    console.log('users', this.users)
     if (this.myReactiveForm.valid) {
       // console.log(this.myReactiveForm.value);
       this.submitted = false;
       var emailExists;
       if(this.users.length !== 0){
        console.log("users array not zero")
         emailExists = this.users.find(
          (u) => u.email == this.myReactiveForm.value.email
        );
        console.log('exists', emailExists);
       }
       
       if (!emailExists) {
        // console.log('does not exist', emailExists);
        const newUser:User=this.myReactiveForm.value
        // this.users.push(newUser)
        
        this.userData.setUser(newUser)
          alert("account created successfully and logged in");
          this.userStatus.setUserLoggedInStatus(true);
          this.userStatus.setCurrentUserName(newUser.username);
          this.router.navigate(['/home'])
        
       } else {
         alert('user already registered with this email');
         console.log('user already registered with this email');
       }
     } else {
       // console.log('fill data properly');
       this.submitted = true;
     }
     // this.submitted = false;
   } 
 

  // onReactive(){
  //   if (this.myReactiveForm.valid) {
  //     this.submitted = true;

  //     const newUser: User = this.myReactiveForm.value;
  //     const existingUser = this.users.find(user => user.email === newUser.email);

  //     if (existingUser) {
  //       alert('User with this email already exists.');
  //     } else {
  //       this.users.push(newUser);

  //       this.userData.setUser(this.users)
  //         alert('User registered successfully.');
  //         this.myReactiveForm.reset();
  //         this.submitted = false;
       
  //     }
  //   }
  // }

   getKeys(passwordErrors: any): string[] {
     return Object.keys(passwordErrors);
   }
 
   getValidatorErrorMessage(validatorName: string): string {
     const errorMessages = {
       required: 'This Field Is required to enter.',
       minlength: 'Password should be at least 8 characters long.',
       email: 'enter valid email address.',
       pattern:'Password must have atleast one characters from all these "a to z, A to Z, special characters and numbers" ',
       maxLength: 'mobile number must and should have 10 digits',
       emailExists: 'email already available',
     };
 
     // console.log(validatorName);
     return (errorMessages as any)[validatorName] || 'Invalid Value';
   }
}
