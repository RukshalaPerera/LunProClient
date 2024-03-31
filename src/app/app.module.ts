import { NgModule } from "@angular/core";

//import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  declarations:[
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }

