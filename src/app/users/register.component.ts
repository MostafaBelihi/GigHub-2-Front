import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service'
import { RegisterModel } from './register.model'
import { AppUser } from "../_models/appUser.model";

@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	/* Properties */
	item: RegisterModel;

	constructor(private auth: AuthService) {
		this.item = new RegisterModel();
		this.item.user = new AppUser();
	}

	ngOnInit() {
	}

	post(){
		console.log(this.item);
		this.auth.register(this.item);
	}

}
