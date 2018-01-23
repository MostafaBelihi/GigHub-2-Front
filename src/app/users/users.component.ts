import { Component, OnInit } from '@angular/core';

import { UsersDataSource } from '../_services/users.datasource'
import { AppUser } from '../_models/appUser.model'

@Component({
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	private users: AppUser[];
	private isEmpty: boolean = true;

	constructor(private usersDataSource: UsersDataSource) {
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
