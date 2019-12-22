import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../services/staff.service';
import { Router } from '@angular/router';
import { staff } from '../../../models/staff';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  staffs: Array<staff> = [];

  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit() {
    this.getStaffDetails();
  }

  async getStaffDetails() {
    const temp: any = await this.staffService.getStaffList();
    this.staffs = temp;
  }

}
