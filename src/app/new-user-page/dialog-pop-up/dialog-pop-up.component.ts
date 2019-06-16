import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../interfaces/dialog-data';
import {FormControl, Validators} from '@angular/forms';
import {UserErrorStateMatcher} from '../../start/user-add/user-add.component';

@Component({
  selector: 'app-dialog-pop-up',
  templateUrl: './dialog-pop-up.component.html',
  styleUrls: ['./dialog-pop-up.component.css']
})
export class DialogPopUpComponent implements OnInit {

    mailFormControl = new FormControl('', [
        Validators.email,
    ]);
    phoneFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[+]\d\d+/)
    ]);
    matcher = new UserErrorStateMatcher();
    constructor(
        public dialogRef: MatDialogRef<DialogPopUpComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    }

    getFormControl(): FormControl {
        switch (this.data.field) {
            case 'phone':
                return this.phoneFormControl;
            case 'mail':
                return this.mailFormControl;
        }
    }

}
