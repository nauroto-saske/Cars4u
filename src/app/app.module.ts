import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
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
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';


import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
import RegisterService from './Models/register.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './add-listing/products/products.component';
import { OrdersComponent } from './add-listing/orders/orders.component';
import { AccountComponent } from './add-listing/account/account.component';
import { CustomerComponent } from './customer/customer.component';

    
export const appRoutes: Routes = [  
{ path: '', component: DashboardComponent },  
{ path: 'Register',component: LoginComponent},  
{ path: 'login',component: LoginComponent},
{ path: 'AddListing',component: AddListingComponent},
{ path: 'Admin', component: AdminComponent},
{ path: 'customer', component: CustomerComponent}];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AddListingComponent,
    AdminComponent,
    ProductsComponent,
    OrdersComponent,
    AccountComponent,
    CustomerComponent,
    
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    SpeedDialModule,
    TabMenuModule,
    TableModule,
    DropdownModule,
    ToolbarModule,
    FieldsetModule,
    ButtonModule,
    CardModule,
    RouterModule.forRoot(appRoutes),
    MessagesModule,
    EditorModule,
    ToastModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
