import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service'
import { RegisterModel } from './register.model'
import { AppUser } from "../_models/appUser.model";

@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	item: RegisterModel;
	
	success: boolean = true;

	constructor(private auth: AuthService, private router: Router) {
		this.item = new RegisterModel();
		this.item.user = new AppUser();
	}

	ngOnInit() {
	}

	post(){
		console.log(this.item);
		if(this.auth.register(this.item))
			this.router.navigate(['/']);
		else
			this.success = false;
	}

}
