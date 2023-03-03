import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // public firstnameControl = new FormControl();
  // public lastnameControl = new FormControl();
  // public emailControl = new FormControl();
  // public messageControl = new FormControl();

  // submitContact()
  // {
  //   console.log(
  //     this.firstnameControl.value,
  //     this.lastnameControl.value,
  //     this.emailControl.value,
  //     this.messageControl.value
  //   );
  // }


  public contactForm = new FormGroup({
    firstname: new FormControl(null, [
      Validators.required
    ]),
    lastname: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required
    ]),
    message: new FormControl(null, [
      Validators.required
    ])
  });

  

  submitContact()
  {
    console.log(this.contactForm.value);
  }
}
