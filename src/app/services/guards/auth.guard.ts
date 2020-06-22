import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, DefaultUrlSerializer, Router, RouterState } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private angularFireAuth: AngularFireAuth, private router: Router) { };

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.angularFireAuth
            .user
            .pipe(
                map(user => {
                    console.log(user);
                    if (user) {
                        return true;
                    } else {
                        return this.router.parseUrl('/login');
                    }
                })
            );
    }
}