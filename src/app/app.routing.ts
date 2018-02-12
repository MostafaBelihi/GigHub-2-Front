import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { RegisterComponent } from "./users/register.component";
import { LoginComponent } from "./users/login.component";

// + Routes and RouterModule
const routes: Routes = [
	{ path: "register", component: RegisterComponent },
	{ path: "login", component: LoginComponent },
	{ path: "users", component: UsersComponent },
	{ path: "", component: HomeComponent }
]

export const routing = RouterModule.forRoot(routes);
