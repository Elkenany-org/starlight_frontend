import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required],
      field3: ['', Validators.required],
      field4: ['', Validators.required],
      textField: ['']
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    } else {
      console.log('Form is invalid.');
    }
  }
}
