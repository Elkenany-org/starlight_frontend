import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  selectedValue: any;

  searchTerm: string = '';

  items = [
    { label: 'food', value: 'Value 1' },
    { label: 'nuts', value: 'Value 2' },
    { label: 'oils', value: 'Value 3' }
  ];
  constructor() {}

  ngOnInit() {
  }

  onSelectionChange() {
    console.log('Selected value:', this.selectedValue);
  }
  onSearchSubmit() {
    console.log('Search term:', this.searchTerm);
  }
}
