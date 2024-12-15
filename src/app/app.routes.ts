import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component'; 
import { LandingpageComponent } from './user/landingpage/landingpage.component';
import { ItemComponent } from './user/item/item.component';
import { CreateComponent } from './user/create/create.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NotificationComponent } from './user/notification/notification.component';
import { InboxComponent } from './user/inbox/inbox.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'home', component: LandingpageComponent},
    {path:'home/item', component: ItemComponent},
    {path:'create', component: CreateComponent},
    {path:'profile', component: ProfileComponent},
    {path:'notification', component: NotificationComponent},
    {path:'inbox', component: InboxComponent},
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', redirectTo: 'home', pathMatch: 'full'}
];
