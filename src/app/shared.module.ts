import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FirstNamePipe } from './utils/first-name.pipe';
import { ShadowDirective } from './utils/shadow.directive';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    ShadowDirective,
    FirstNamePipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    RouterModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    ShadowDirective,
    FirstNamePipe,
    RouterModule,
    FormsModule,
    MatDialogModule
  ]
})
export class SharedModule { }
