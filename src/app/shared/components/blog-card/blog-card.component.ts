import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  constructor(private router:Router){}
  blog = [
    { img: 'assets/food.jpg' ,type:1}, 
    { img: 'assets/livestock.jpg' ,type:2},
    { img: 'assets/food.jpg' ,type:1}, 
    { img: 'assets/livestock.jpg' ,type:2},
    { img: 'assets/food.jpg' ,type:1}, 
    { img: 'assets/livestock.jpg' ,type:2},
    { img: 'assets/food.jpg' ,type:1}, 
    { img: 'assets/livestock.jpg' ,type:2},
  ];

  navigate(id:any){
    this.router.navigateByUrl('event-details/1');
  }
}
