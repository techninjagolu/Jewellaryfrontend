import { Component, OnInit , AfterViewInit} from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit , AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
ngAfterViewInit(){
    $(".brand-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	 	  
      items : 5,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='flaticon-arrows-3'></i>","<i class='flaticon-arrows-4'></i>"],
      itemsDesktop : [1199,5],
	  itemsDesktopSmall : [991,4],
	  itemsTablet: [767,3],
	  itemsMobile : [479,2],
  });  	
    
  }
}
