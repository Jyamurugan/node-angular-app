import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  employeeData: any = {};
  updateRecord = false;
  constructor(private _service: EmployeeService, private _router: ActivatedRoute) {
    this._router.params.subscribe((param) => {
      const id  = param['id'];
      if(id) {
        this.employeeData = _service.selectedEmployee;
        this.updateRecord  =true;
      }
    });
   }

  createRecord(form: any) {
    this.employeeData.age = _calculateAge(new Date(this.employeeData.dob));
    (!this.updateRecord) ? this._service.post(this.employeeData).subscribe() : this._service.put(this.employeeData).subscribe();
    form.reset();
  }
}

function _calculateAge(birthday) { // birthday is a date
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
