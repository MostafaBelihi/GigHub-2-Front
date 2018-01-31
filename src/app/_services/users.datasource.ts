import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { AppUser } from "../_models/appUser.model";

@Injectable()
export class UsersDataSource {
	serviceUrl: string = "http://localhost:5000";

	constructor(private _http: Http) { }
	
	getUsers(): Observable<AppUser[]> {
		return this._http.get(this.serviceUrl + "/auth/getUsers").map(response => response.json());
	}
}