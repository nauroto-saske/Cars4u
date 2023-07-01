import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from "primeng/dropdown";
import { ToolbarModule } from 'primeng/toolbar';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";

    
export const appRoutes: Routes = [  
{ path: '', component: DashboardComponent },  
{ path: 'Register',component: RegisterComponent},  
{ path: 'login',component: LoginComponent},
{ path: 'AddListing',component: AddListingComponent}];   
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AddListingComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
   
    FormsModule,
    ButtonModule,
    SpeedDialModule,
    TabMenuModule,
    TableModule,
    DropdownModule,
    ToolbarModule,
    FieldsetModule,
    ButtonModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
