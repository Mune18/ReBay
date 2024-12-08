import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'home', component: LandingpageComponent},
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', redirectTo: 'home', pathMatch: 'full'}
];
