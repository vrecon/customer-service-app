import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer.model';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private customerService: CustomerService, private router: Router) { }
  customers: Customer[];

    ngOnInit() {
      this.customerService.getCustomers().subscribe(list => {
        this.customers = list;
      });
  }



}
