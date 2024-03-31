import {Component, OnInit} from '@angular/core';
import {Employee, IEmployee} from "../employee";

import {CommonModule} from "@angular/common";
import {EmployeeService} from "../employee.service";
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees!: Employee[];
  private subscription: Subscription = new Subscription();
constructor(private employeeService: EmployeeService) {
}
ngOnInit(): void{
  this.findAllEmployees({});
  this.getEmployees()
}
private getEmployees(){
  this.employeeService.getEmployeeList().subscribe(data=>{
    this.employees = data;
  });
}

  findAllEmployees(params: any) {
    this.subscription.add(
        this.employeeService
            .findAllEmployees(params)
            .pipe(
                filter((res: HttpResponse<IEmployee[]>) => res.ok),
                map((res: HttpResponse<IEmployee[]>) => res.body)
            )
            .subscribe(
                (res: IEmployee[] | null) => {
                    if (res != null) {
                        this.employees = res;
                    } else {
                        this.employees = [];
                    }
                },

                (res: HttpErrorResponse) =>
                    console.log('error in extracting all SeafarerRank', res)
            )
    );
}
}
