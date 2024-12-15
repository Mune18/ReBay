import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { LandingpageComponent } from './user/landingpage/landingpage.component';
import { ItemComponent } from './user/item/item.component';
import { CreateComponent } from './user/create/create.component';
import { NotificationComponent } from './user/notification/notification.component';
import { ProfileComponent } from './user/profile/profile.component';
import { InboxComponent } from './user/inbox/inbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    LandingpageComponent,
    ItemComponent,
    CreateComponent,
    NotificationComponent,
    ProfileComponent,
    InboxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rebay';

  ngOnInit(): void {
    initFlowbite();
  }
}
