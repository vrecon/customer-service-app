import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../customer.model';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  customer: Customer;
  editForm: FormGroup;
  submitted = false;
  id: Number;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService,private route: ActivatedRoute, private router: Router) { }

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

  createForm(customer: Customer){
    this.editForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
    });
  }
}
