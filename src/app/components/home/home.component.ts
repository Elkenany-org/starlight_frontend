import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  type: number = 1; // Change this value to 2 for the second card

  slides = [
    { img: 'assets/food.jpg' }, { img: 'assets/food.jpg' }, { img: 'assets/food.jpg' }, { img: 'assets/food.jpg' },
    { img: 'assets/livestock.jpg' },
    { img: 'assets/agri.jpg' },
    { img: 'assets/food.jpg' },
    { img: 'assets/agri.jpg' },
    { img: 'assets/livestock.jpg' },

    
  ];
  slideConfig = { 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    // centerMode: true,
    // centerPadding: '30px',
    arrows: true,
    infinite: true,
    vertical: false, // Add this line to enable horizontal scrolling

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],};


    blog = [
      { img: 'assets/food.jpg' ,type:1}, 
      { img: 'assets/livestock.jpg' ,type:2},

    ];



}
