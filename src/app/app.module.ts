import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/login/login.component';
import { ErrorComponent } from './comps/error/error.component';
import { HomepageComponent } from './comps/homepage/homepage.component';
import { MenuComponent } from './comps/menu/menu.component';
import { AboutusComponent } from './comps/aboutus/aboutus.component';
import { AtelierComponent } from './comps/atelier/atelier.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './comps/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeateliersComponent } from './comps/listeateliers/listeateliers.component';
import { SelectedatelierComponent } from './comps/selectedatelier/selectedatelier.component';
import { FooterComponent } from './comps/footer/footer.component';
import { DeletememberComponent } from './comps/admin/deletemember/deletemember.component';
import { AddworkshopComponent } from './comps/admin/addworkshop/addworkshop.component';
import { NavComponent } from './comps/nav/nav.component';
import { DeleteworkshopComponent } from './comps/admin/deleteworkshop/deleteworkshop.component';
import { PipepersoPipe } from './pipeperso.pipe';
import { InfosComponent } from './comps/admin/infos/infos.component';
import { LoginadminComponent } from './comps/loginadmin/loginadmin.component';
import { ChangepwdComponent } from './comps/changepwd/changepwd.component';
import { SeeworkshopComponent } from './comps/admin/seeworkshop/seeworkshop.component';
import { EditworkshopComponent } from './comps/admin/editworkshop/editworkshop.component';
import { RequestComponent } from './comps/request/request.component';
import { SeeparticipantsComponent } from './comps/admin/seeparticipants/seeparticipants.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomepageComponent,
    MenuComponent,
    AboutusComponent,
    AtelierComponent,
    DashboardComponent,
    SigninComponent,
    ListeateliersComponent,
    SelectedatelierComponent,
    FooterComponent,
    DeletememberComponent,
    AddworkshopComponent,
    NavComponent,
    DeleteworkshopComponent,
    PipepersoPipe,
    InfosComponent,
    LoginadminComponent,
    ChangepwdComponent,
    SeeworkshopComponent,
    EditworkshopComponent,
    RequestComponent,
    SeeparticipantsComponent
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
ReactiveFormsModule,
HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
