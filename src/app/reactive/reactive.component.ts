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
  customers: Customer[];

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(!this.id){
      this.customer = new Customer();
      this.createForm()
    }else {
      this.customerService.get(this.id).subscribe(customer => {
        this.customer = customer;
        this.createForm()
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.editForm.controls;
  }

  createForm(){

    this.editForm = this.formBuilder.group({
      customerName: [this.customer.customerName, Validators.required],
      dateofBirth: [this.customer.dateofBirth, Validators.required],
      phoneNumber: [this.customer.phoneNumber, [Validators.required,Validators.minLength(10)]],
    });
  }



  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    if(this.id){
      let savedCustomer = this.editForm.value;
      savedCustomer.customerId = this.id;
      this.customerService.update(savedCustomer).subscribe();
    }else{
      this.customerService.save(this.editForm.value).subscribe();
    }
    this.router.navigate(['']);
  }
}
