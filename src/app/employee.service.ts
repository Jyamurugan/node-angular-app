import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class EmployeeService {
    private baseUrl = '';
    selectedEmployee: any  = {};
    constructor(private _http: Http) {
    }

    get() {
        return this._http
        .get(this.baseUrl + '/api/employees')
        .map(handleResponse)
        .catch(handleError);
    }

    post(employee: any) {
        return this._http.post(this.baseUrl + '/api/employees', employee)
        .map(handleResponse)
        .catch(handleError);
    }

    put(employee: any) {
        return this._http.put(this.baseUrl + '/api/employees/' + employee._id, employee)
        .map(handleResponse)
        .catch(handleError);
    }

    delete(employee) {
        return this._http.delete(this.baseUrl + '/api/employees/' + employee._id)
        .map(handleResponse)
        .catch(handleError);
    }
}

function handleError(err) {
    // TODO
    return Observable.throw(err);
}

function handleResponse(res) {
    return res.json() || {};
}

