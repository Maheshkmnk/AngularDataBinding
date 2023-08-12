import {  Router } from '@angular/router';
import { inject } from '@angular/core'; 
import { UserstatusService } from './userstatus.service';

export const authGuard = () => {
  console.log('authGuard#canActivate called');
  const authService = inject(UserstatusService);
  const router = inject(Router);
   
  authService.getUserLoggedInStatus().subscribe((status) => {
    console.log('status',status)
    if(status){
      console.log('true');
      return true;
    }else{
      console.log('false');
      return router.navigate(['']);
    }
  })
  
};
