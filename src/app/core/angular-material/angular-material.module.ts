import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ]
})
export class AngularMaterialModule { }
