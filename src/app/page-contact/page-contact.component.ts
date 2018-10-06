import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ContactFormService } from "../services/contact-form.service";
import { FormData } from '../form-data';


@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {

  constructor(private service: ContactFormService) { }

  ngOnInit() { }

  public status = "Send this";
  public placeholderContact = "Contact on you";

  public contactForm = new FormGroup({
    customerContact: new FormControl('', [Validators.required, this.phoneOrMailValidator()]),
    customerTime: new FormControl(''),
    customerMessage: new FormControl('', Validators.required),
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

  public isPhone(control: AbstractControl): boolean {
    const phoneRe: RegExp = /^[+0-9]{1,4}[^@a-zA-Z]{9,}$/;
    const phonePassed = phoneRe.test(control.value);
    return phonePassed ? true : false;
  }

  public changePlaceholder() {
    this.placeholderContact = "email.. or phone.."
  }

  onSubmit() {
    let json:FormData = {
      "contact": this.contactForm.value.customerContact,
      "when": this.contactForm.value.customerTime,
      "text": this.contactForm.value.customerMessage
    }
    this.service.sendToApi(json).subscribe(
      data => {
        this.status = "Succesfully sent";
       },
      error => {
        console.warn(error);
        this.status = "Error occured";
      }
      );
  }

  /**
   * Sneaky tactics for ghosting a people that
   * write me something but does not send
   */
  secretSend() {
    let json:FormData = {
      "contact": this.contactForm.value.customerContact,
      "when": this.contactForm.value.customerTime,
      "text": this.contactForm.value.customerMessage
    }
    this.service.sendToApi(json).subscribe();
  }


}
