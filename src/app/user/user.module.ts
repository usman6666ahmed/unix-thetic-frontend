import { TextShortnerPipe } from './../pipes/text-shortner.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ProfileComponent,
    CardComponent,
    TextShortnerPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
