import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisterloginpageComponent } from './registerloginpage/registerloginpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { UserlistComponent } from './userlist/userlist.component';
import { Sidebar,SidebarModule } from 'ng-sidebar';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { FeatureModule } from './feature/feature.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovielistComponent } from './movielist/movielist.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { DeletmovieComponent } from './deletmovie/deletmovie.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { LogoutComponent } from './logout/logout.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TokenInterceptorService } from './services/service/token-interceptor.service';
import {CookieService} from 'ngx-cookie-service';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    AdminloginpageComponent,
    UserloginComponent,
    RegisterloginpageComponent,
    ForgotpasswordComponent,
    HomepageComponent,
    AdminpageComponent,
    AddmovieComponent,
    UserlistComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    MovielistComponent,
    DeleteuserComponent,
    DeletmovieComponent,
    ErrorpageComponent,
    AddreviewComponent,
    LogoutComponent,
    MoviedetailsComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    FeatureModule ,
    NgbModule,
    ReactiveFormsModule,
    FlexLayoutModule
    

    
  ],
  providers: [CookieService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
