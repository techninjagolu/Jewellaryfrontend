import { Component, OnInit , AfterViewInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-home-page-blog',
  templateUrl: './home-page-blog.component.html',
  styleUrls: ['./home-page-blog.component.css']
})
export class HomePageBlogComponent implements OnInit , AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    $(".blog-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	 	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='flaticon-arrows-3'></i>","<i class='flaticon-arrows-4'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [991,2],
	  itemsTablet: [767,2],
	  itemsMobile : [479,1],
  });  
  }

}
