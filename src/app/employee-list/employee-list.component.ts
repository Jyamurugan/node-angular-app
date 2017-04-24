import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees$: any;

  constructor(private _service: EmployeeService,
  private _router: Router) { 
    this.employees$ = this._service.get();
  }

  update(employee) {
    this._service.selectedEmployee = employee;
    this._router.navigate(['/update/' + employee._id]);
  }

  delete(employee) {
    this.employees$  = null;
    this._service
    .delete(employee)
    .subscribe(() => {
      this.employees$ = this._service.get();
    },
    () => {
      this.employees$ = this._service.get();
    });
  }
}
