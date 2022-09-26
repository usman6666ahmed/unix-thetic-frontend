import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title:'Home' },
  { path: 'login', component: LoginComponent, title:'Login' },
  { path: 'register', component: RegisterComponent, title:'Register' },
  { path: 'profile', component: ProfileComponent, title:'Profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
