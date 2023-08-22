import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
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
