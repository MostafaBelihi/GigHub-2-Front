import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service'
import { AppUser } from '../_models/appUser.model'

@Component({
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	private users: AppUser[];
	private isEmpty: boolean = true;

	constructor(private usersDataSource: AuthService) {
		this.users = [];

		// Getting list of users
		this.usersDataSource.getUsers().subscribe(response => {
			this.users = response;
			this.isEmpty = (this.users.length == 0);
		});
	}

	ngOnInit() {
	}

}
