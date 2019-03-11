import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer.model';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }
  customer: Customer;
  id: Number;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(!this.id){
      this.customer = new Customer();
    }else {
      this.customerService.get(this.id).subscribe(customer => {
        this.customer = customer;
      });
    }
  }

  onSubmit(){
    if(this.id){
      this.customerService.update(this.customer).subscribe();
    }else{
      this.customerService.save(this.customer).subscribe();
    }
    this.router.navigate(['']);
  }

  cancel(){
    this.router.navigate(['']);
  }

}
