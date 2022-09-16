import { HomeComponent } from './pages/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, title:'Home' },
  { path: 'login', component: LoginComponent, title:'Login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
