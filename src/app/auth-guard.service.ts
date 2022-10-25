import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    this.authService.isAuthenticated().then((authencated: any) => {
      if (authencated) {
        return true
      } else {
        this.router.navigate(['/']);
        return false;
      }
    })
  }

  canActivateChild(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.canActivate(route, state);

  }
}
