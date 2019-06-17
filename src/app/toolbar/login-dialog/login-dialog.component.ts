import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

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
