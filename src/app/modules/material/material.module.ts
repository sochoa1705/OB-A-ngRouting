import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Export some modules from @angular/material
import   {MatButtonModule} from '@angular/material/button';
import   {MatInputModule} from '@angular/material/input';
import   {MatCardModule} from '@angular/material/card';
import   {MatTableModule, MatHeaderRow, MatRow, MatHeaderRowDef, MatRowDef} from '@angular/material/table';







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
    MatHeaderRowDef

  ]
})
export class MaterialModule { }
