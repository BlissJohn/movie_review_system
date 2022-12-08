import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UsergGuard implements CanActivate {
  constructor(private userService: UserService,private rtr:Router) { }
  canActivate( route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.isloggedin()) { return true; }
    else { alert("You must login as user"); this.rtr.navigate(["userlogin"]); return false;  }

  }

}
