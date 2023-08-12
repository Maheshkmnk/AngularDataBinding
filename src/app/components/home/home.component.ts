import { Component, OnInit } from '@angular/core';
import { UserstatusService } from '../../services/userstatus.service';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  existingUser:any;
  products:any;
  ngOnInit(): void{
    // this.products$=this.ApiService.getAllProducts();
    this.apiService.getAllProducts().subscribe(
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
  constructor(private apiService:ApiService ,private userStatus:UserstatusService){
    this.userStatus.getCurrentUserName().subscribe((currentUser) =>{
      this.existingUser =currentUser;
    });
  }
}
