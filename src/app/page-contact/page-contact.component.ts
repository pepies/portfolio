import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  private _phoneNumber: boolean = false;

  private contactForm = new FormGroup({
    customerContact: new FormControl('', [Validators.required, this.phoneOrMailValidator()]),
    customerMessage: new FormControl('', Validators.required)
  })

  private phoneOrMailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const phoneRe: RegExp = /^[+0-9]{1,4}[^@a-zA-Z]{8,}$/;
      const mailRe: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const phonePassed = phoneRe.test(control.value);
      const mailPassed = mailRe.test(control.value);
      const passed = mailPassed || phonePassed;
      return passed ? null : { 'customerContact': { value: control.value } };
    };
  }

  private isPhone(control: AbstractControl):boolean {
    const phoneRe: RegExp = /^[+0-9]{1,4}[^@a-zA-Z]{9,}$/;
    const phonePassed = phoneRe.test(control.value);
    return phonePassed ? true : false;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }
}
