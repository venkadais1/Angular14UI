import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDividerModule,
        MatProgressBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatCheckboxModule,
        MatSelectModule
    ]
})

export class materialModule
{

}