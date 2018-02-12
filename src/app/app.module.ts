import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './users/register.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './users/login.component'

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		HomeComponent,
		RegisterComponent,
		NavComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		HttpModule
	],
	providers: [
		AuthService
	],
	bootstrap: [AppComponent, NavComponent]
})
export class AppModule { }
