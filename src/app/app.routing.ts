import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { RegisterComponent } from "./users/register.component";

// + Routes and RouterModule
const routes: Routes = [
	{ path: "register", component: RegisterComponent },
	{ path: "users", component: UsersComponent },
	{ path: "", component: HomeComponent }
]

export const routing = RouterModule.forRoot(routes);
