import { Component, NgModule } from '@angular/core';
import {  Routes, RouterModule} from '@angular/router';
import {AdminloginpageComponent} from '../app/adminloginpage/adminloginpage.component';
import { UserloginComponent } from '../app/userlogin/userlogin.component';
import{RegisterloginpageComponent} from '../app/registerloginpage/registerloginpage.component';
import { ForgotpasswordComponent } from '../app/forgotpassword/forgotpassword.component';
import { HomepageComponent } from '../app/homepage/homepage.component';
import { AdminpageComponent } from '../app/adminpage/adminpage.component';
import { AddmovieComponent } from '../app/addmovie/addmovie.component';
import { HeaderComponent } from '../app/header/header.component';
import { HomeComponent } from '../app/home/home.component';
import { MovieComponent } from '../app/movie/movie.component';
import { FeatureModule } from '../app/feature/feature.module';
import { UserlistComponent } from './userlist/userlist.component';
import { MovielistComponent } from './movielist/movielist.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { DeletmovieComponent } from './deletmovie/deletmovie.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { LogoutComponent } from '../app/logout/logout.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AuthGuard } from './services/auth.guard';
import { UsergGuard } from './services/userg.guard';


const routes: Routes = [
  {path:'home/:id',component:MoviedetailsComponent,canActivate:[UsergGuard]},
  {path:'addreview',component:AddreviewComponent,canActivate:[UsergGuard]},
  {path:'errorpage',component:ErrorpageComponent},
  {path:'deletmovie',component:DeletmovieComponent,canActivate:[AuthGuard]},
  {path:'deleteUser',component:DeleteuserComponent,canActivate:[AuthGuard]},
  {path:'movielist',component:MovielistComponent},
  {path:'userlist',component:UserlistComponent,canActivate:[AuthGuard]},
  {path: 'adminloginpage' , component: AdminloginpageComponent},
  {path: 'userlogin',component: UserloginComponent},
  {path:'registerloginpage', component: RegisterloginpageComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path:'adminpage', component: AdminpageComponent,canActivate:[AuthGuard]},
  {path:'addmovie',component:AddmovieComponent,canActivate:[AuthGuard]},
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent,canActivate:[UsergGuard]},
  {path:'movie',component:MovieComponent},
  {path:'feature',component:FeatureModule},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGuard,UsergGuard]},
  {path:'**',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'',redirectTo: 'homepage',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
