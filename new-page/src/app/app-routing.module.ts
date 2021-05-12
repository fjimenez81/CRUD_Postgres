import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import { HomeComponent } from "./components/home/home.component";
import { SignUpComponent } from './components/sign-up/sing-up.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "admin", component: AdminComponent},
  {path:"signUp", component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
