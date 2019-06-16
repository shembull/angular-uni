import {
    MatButtonModule, MatCardModule,
    MatCheckboxModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule
} from '@angular/material';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatTooltipModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatTooltipModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule,
        MatDialogModule,
    ],
})
export class MaterialModule { }
