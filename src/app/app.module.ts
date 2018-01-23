import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UsersDataSource } from './_services/users.datasource'

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		HttpModule
	],
	providers: [
		UsersDataSource
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
