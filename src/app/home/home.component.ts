import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service'

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private auth: AuthService) { }

	ngOnInit() {
	}

}
