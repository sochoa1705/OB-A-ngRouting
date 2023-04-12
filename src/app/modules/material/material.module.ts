import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Export some modules from @angular/material
import   {MatButtonModule} from '@angular/material/button';
import   {MatInputModule} from '@angular/material/input';
import   {MatCardModule} from '@angular/material/card';
import   {MatTableModule, MatHeaderRow, MatRow, MatHeaderRowDef, MatRowDef} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';







@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
