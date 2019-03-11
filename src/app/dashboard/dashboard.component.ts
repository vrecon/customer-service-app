import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private customerService: CustomerService, private http: HttpClient) { }
  customers: Customer[];

    ngOnInit() {

      this.customerService.getCustomers().subscribe(list => {
        this.customers = list;
      } )

      this.customerService.getCustomers().subscribe(list => {
        this.customers = list;
      } )
  }

}
