import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {Employee} from "./employee";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LUNA ENTERPRISES';
}
