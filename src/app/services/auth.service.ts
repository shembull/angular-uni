import { Injectable } from '@angular/core';
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user: User;
    private loginStateSubject = new BehaviorSubject<boolean>(false);
    public loginState: Observable<boolean> = this.loginStateSubject.asObservable();

    constructor(
        public afAuth: AngularFireAuth,
        public router: Router
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
                this.loginStateSubject.next(true);
            } else {
                localStorage.setItem('user', null);
                this.loginStateSubject.next(false);
            }
        });
    }

    get isLoggedIn(): boolean {
        const  user  =  JSON.parse(localStorage.getItem('user'));
        return  user  !==  null;
    }

    async login(email: string, password: string): Promise<boolean> {
        try {
            await this.afAuth.auth.signInWithEmailAndPassword(email, password);
            this.loginStateSubject.next(true);
            console.log('Logged in');
            return true;
        } catch (e) {
            console.log('Not logged in');
            return false;
        }
    }

    async logout() {
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.loginStateSubject.next(false);
    }
}
