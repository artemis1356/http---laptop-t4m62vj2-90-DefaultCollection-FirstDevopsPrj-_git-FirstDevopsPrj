import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';

const modules = [
  ReactiveFormsModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSelectModule,
  MatTableModule,
  MatListModule,
  MatDialogModule,
  MatBadgeModule,
  MatPaginatorModule,
  MatGridListModule,
];


@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
