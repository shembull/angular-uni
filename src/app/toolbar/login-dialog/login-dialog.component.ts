import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {AuthService} from '../../services/auth.service';
import {UserErrorStateMatcher} from '../../start/user-add/user-add.component';
import {FormControl, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

    wrongPassword: boolean;
    emailFormControl = new FormControl('', [
        Validators.email,
        Validators.required,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required,
    ]);
    matcher = new UserErrorStateMatcher();

    constructor(
        public dialogRef: MatDialogRef<LoginDialogComponent>,
        private authService: AuthService,
        private dataService: DataService,
        private snackBar: MatSnackBar,
        private vc: ViewContainerRef,
    ) {}

    closeDialog(): void {
        this.dialogRef.close();
    }

    login(email: string, pw: string): void {
        this.authService.login(email, pw).then(res => {
            if (res) {
                this.dialogRef.close();
            } else {
                this.setWrongPassword(true);
                this.snackBar.open('Falsches Passwort', 'OK', {politeness: 'off', duration: 5000, viewContainerRef: this.vc});
            }
        });
    }

    ngOnInit() {
        this.dataService.password.subscribe(state => {
            this.wrongPassword = state;
        });
    }

    setWrongPassword(b: boolean) {
        this.dataService.setPassword(b);
    }

    passwordState(): boolean {
        return this.wrongPassword;
    }
}
