import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
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
}
