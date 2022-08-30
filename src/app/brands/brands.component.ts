import { Component, OnInit , AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { JewellaryPortalServiceService } from '../service/jewellary-portal-service.service';
declare let $: any;
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit , AfterViewInit {
  error: any;
  constructor(private router: Router,
    private jewellaryService: JewellaryPortalServiceService) { }
 
  brandlist:any;
  owl:any;
  ngOnInit(): void {
    this.getBrandList();
  }
  getBrandList()
  {
    this.jewellaryService.getBrandList().subscribe(
      (data) => {
        this.brandlist = data.data;
        console.log(this.brandlist );
      },
      error => this.error = error
    );
    this.owl.trigger('refresh.owl.carousel');
  }
ngAfterViewInit(){
   this.owl =  $(".brand-list").owlCarousel({
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
