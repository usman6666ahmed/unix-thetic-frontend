import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ProfileComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
