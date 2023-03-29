import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    //Return true -> allow access to route
    //Return false -> block access to route
    let tokenAuth = sessionStorage.getItem('isLoggedInToken');
    if(tokenAuth){
      return true;

    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}