import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginData = {
        userName: '',
        password: ''
	}
	
	success: boolean = true;

	constructor(private auth: AuthService, private router: Router) { }

	ngOnInit() {
	}

	post() {
		console.log(this.loginData);
		if(this.auth.login(this.loginData))
			this.router.navigate(['/']);
		else
			this.success = false;
	}
}
