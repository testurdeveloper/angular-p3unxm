import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { staff } from '../models/staff';

@Injectable()
export class StaffService {

  constructor(private http: HttpClient, private router: Router) { }
 
  sendRequestForGetStaffList() {
    return this.http.get('/api/staff');
  }

  sendRequestForAddLawer(data) {
    return this.http.post('/api/add-lawer', data);
  }

  sendRequestForUpdateLawer(data) {
    return this.http.put('/api/update-lawer', data);
  }

  sendRequestForRemoveLawyer(data) {
    return this.http.delete(`/api/remove-lawer/${data.id}`);
  }

  sendRequestForAddClark(data) {
    return this.http.post('/api/add-clark', data);
  }

  sendRequestForUpdateClark(data) {
    return this.http.put('/api/update-clark', data);
  }

  sendRequestForRemoveClark(data) {
    return this.http.delete(`/api/remove-clark/${data.id}`);
  }

  getStaffList() {
    return new Promise(resolve => {
      this.sendRequestForGetStaffList().subscribe(data => {
        console.log(data);
        resolve(data);
      }, error => {
        resolve([]);
      });
    });
  }

  AddLawyer(sendData) {
    return new Promise(resolve => {
      this.sendRequestForAddLawer(sendData).subscribe(data => {
        const tempData: any = data || {};
        console.log(tempData)
        resolve();
      }, error => {
        resolve([]);
      });
    });
  }

  updateLawyer(sendData) {
    return new Promise(resolve => {
      this.sendRequestForUpdateLawer(sendData).subscribe(data => {
        const tempData: any = data || {};      
        resolve();
      }, error => {       
        resolve([]);
      });
    });
  }

  removeLawyer(sendData) {
    return new Promise(resolve => {
      this.sendRequestForRemoveLawyer(sendData).subscribe(data => {
        const tempData: any = data || {};
        resolve();
      }, error => {
        resolve([]);
      });
    });
  }

  AddClark(sendData) {
    return new Promise(resolve => {
      this.sendRequestForAddClark(sendData).subscribe(data => {
        const tempData: any = data || {};
        resolve();
      }, error => {
        resolve([]);
      });
    });
  }

  updateClark(sendData) {
    return new Promise(resolve => {
      this.sendRequestForUpdateClark(sendData).subscribe(data => {
        const tempData: any = data || {};      
        resolve();
      }, error => {       
        resolve([]);
      });
    });
  }

  removeClark(sendData) {
    return new Promise(resolve => {
      this.sendRequestForRemoveClark(sendData).subscribe(data => {
        const tempData: any = data || {};
        resolve();
      }, error => {
        resolve([]);
      });
    });
  }
}
