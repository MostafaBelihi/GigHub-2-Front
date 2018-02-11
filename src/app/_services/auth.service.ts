import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { AppUser } from "../_models/appUser.model";
import { RegisterModel } from "../users/register.model";
import { JwtPacket } from "../_models/jwtPacket.model";

@Injectable()
export class AuthService {
	/* Constants */
	ServiceUrl: string = "http://localhost:5000";
	NameKey = "name";
	TokenKey = "token";

	/* Properties */
	// Gets Name from LocalStorage
	get name() {
		return localStorage.getItem(this.NameKey);
	}

	// Checks if authenticated
	// + Checks if authentication token exists
	get isAuthenticated() {
		return !!localStorage.getItem(this.NameKey);
	}

	constructor(private _http: Http, private router: Router) { }
	
	// Get users list
	getUsers(): Observable<AppUser[]> {
		return this._http.get(this.ServiceUrl + "/auth/getUsers").map(response => response.json());
	}

	// Register user to backend, store its data in browser after success
	register(regsiter: RegisterModel) {
		return this._http.post(this.ServiceUrl + "/auth/register", regsiter).map(response => <JwtPacket>response.json())
			.subscribe(response => {
				// + Storing returned token to browser LocalStorage to be used in authentication checks, redirect after success
				if (response.isError)
					console.log("Error!");
				else {
					// Token is valid?
					if (!response.token)
						return;
					
					// Store token, redirect
					localStorage.setItem(this.TokenKey, response.token);
					localStorage.setItem(this.NameKey, response.firstName);
					this.router.navigate(['/']);
				}
			});
	}

	// + Clear LocalStorage values to implement logout
    logout() {
        localStorage.removeItem(this.NameKey);
        localStorage.removeItem(this.TokenKey);
    }
}