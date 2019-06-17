import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AuthService} from '../../services/auth.service';
import {UserErrorStateMatcher} from '../../start/user-add/user-add.component';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
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
    ) {}

    closeDialog(): void {
        this.dialogRef.close();
    }

    login(email: string, pw: string): void {
        this.authService.login(email, pw).then(res => {
            if (res) {
                this.dialogRef.close();
            } else {
                alert('Passwort ist falsch');
            }
        });
    }

    ngOnInit() {
    }

}
