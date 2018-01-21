import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";

// + Routes and RouterModule
const routes: Routes = [
	{ path: "users", component: UsersComponent },
	{ path: "", component: HomeComponent }
]

export const routing = RouterModule.forRoot(routes);
