import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";

//import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
import {Employee} from "./employee";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseURL = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  

  findAllEmployees(params: any): Observable<HttpResponse<Employee[]>> {

  return this.httpClient.get<Employee[]>(`http://localhost:8080/api/v1/employees`,{ params, observe: 'response'});
 
 }

}
