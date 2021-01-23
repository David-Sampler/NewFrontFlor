import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  any {

    const token = localStorage.getItem('token')
    
    if(token){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false
    }
  
    



  }
}
