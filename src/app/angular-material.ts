import {
    MatButtonModule, MatCardModule,
    MatCheckboxModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTabsModule
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
        MatDialogModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTabsModule
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
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTabsModule
    ],
})
export class MaterialModule { }
