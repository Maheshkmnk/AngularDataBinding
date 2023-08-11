import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import {Observable} from 'rxjs';
import {User} from '../interfaces/interface.user'



// interface User {
//   username: String;
//   email: String;
//   phone: Number;
//   password: String;
// }

@Component({
  selector: 'app-forms-databinding',
  templateUrl: './forms-databinding.component.html',
  styleUrls: ['./forms-databinding.component.css'],
})
export class FormsDatabindingComponent implements OnInit{
  private users: User[] = [];
  existingUser: any;
  isRegisterShow:boolean=false;
  isLoginShow:boolean=false;
  products:any;

  ngOnInit(): void{
    // this.products$=this.ApiService.getAllProducts();
    this.ApiService.getAllProducts().subscribe(
      (response) => {
        // console.log('User data:',response)
        this.products=response;
        console.log('products:',this.products)

      },
      (error) => {
         console.error('Error:', error)
      }
    )
  }

  showregister(){
    this.isLoginShow=false;
    this.isRegisterShow=true;
  }

  showLogin(){
    this.isRegisterShow=false;
    this.isLoginShow=true;
  }


  // Template Driven Form code
  onTemplateDriven(formData: any) {
    const user = this.users.find((u) => u.email.toLowerCase() === formData.email.toLowerCase());
    console.log('user',user)
    if (user && user.password == formData.password) {

      this.existingUser = user.username;
      console.log('Successfully Logged in');
      this.isLoginShow=false;
      alert("Successfully Logged in")

    } else {
      console.log('Invalid credentials!');
      alert('Invalid credentials!');
    }
  }

  LogOut(){
    if(this.existingUser){
      this.isLoginShow=false;
    this.isRegisterShow=false;
      this.existingUser=null;
      console.log('logged out')
    }
  }

  // Reactive Form code
  myReactiveForm: FormGroup;
  submitted: boolean = false;
  passwordPattern: any =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  constructor(private ApiService:ApiService,private fb: FormBuilder) {
    this.myReactiveForm = fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)],
      ],
    });
  }

  onReactive() {
    if (this.myReactiveForm.valid) {
      // console.log(this.myReactiveForm.value);
      this.submitted = false;
      var emailExists = this.users.find(
        (u) => u.email == this.myReactiveForm.value.email
      );
      console.log('exists', emailExists);

      if (!emailExists) {
        this.users.push(this.myReactiveForm.value);
        console.log('form submission succesfull...');
        console.log(this.users);
        alert("account created successfully and logged in");
        this.existingUser = this.myReactiveForm.value.username;
        this.isRegisterShow=false;
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

  getKeys(passwordErrors: any): string[] {
    return Object.keys(passwordErrors);
  }

  getValidatorErrorMessage(validatorName: string): string {
    const errorMessages = {
      required: 'This Field Is required to enter.',
      minlength: 'Password should be at least 8 characters long.',
      email: 'enter valid email address.',
      pattern:
        'Password must have atleast one characters from all these "a to z, A to Z, special characters and numbers" ',
      maxLength: 'mobile number must and should have 10 digits',
      emailExists: 'email already available',
    };

    // console.log(validatorName);
    return (errorMessages as any)[validatorName] || 'Invalid Value';
  }
}
