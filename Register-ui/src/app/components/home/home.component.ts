import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  provinces: string[] = [
    'AB',
    'BC',
    'ON',
    //cruently hardcoded
  ];
  genders: string[] = [
    'male',
    'female',
    'Do not want to answer'
  ]
  registerform: FormGroup;
  validMessage: string ="";
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.registerform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      postCode: new FormControl('', Validators.required),
      birth: new FormControl('', Validators.required),
      gender: new FormControl()
    })
  }
  submitRegistration(){
    if(this.registerform.valid) {
      this.validMessage = "Your registration has been submitted. Thank you!";
      this.registerService.createUserInfo(this.registerform.value).subscribe(
        data => {
          this.registerform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else{
      this.validMessage = "Please fill out the form before submitting!"
    }
  }
}
