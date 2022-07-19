import { Component, OnInit , AfterViewInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-home-page-testimonial',
  templateUrl: './home-page-testimonial.component.html',
  styleUrls: ['./home-page-testimonial.component.css']
})
export class HomePageTestimonialComponent implements OnInit , AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    $(".testimonial-list").owlCarousel({
        autoPlay: false, 
      slideSpeed:2000,
      pagination:true,
      navigation:false,	 	  
        items : 1
    });
  }
}
