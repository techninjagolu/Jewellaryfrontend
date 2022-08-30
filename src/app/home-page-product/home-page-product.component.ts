import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JewellaryPortalServiceService } from '../service/jewellary-portal-service.service';
@Component({
  selector: 'app-home-page-product',
  templateUrl: './home-page-product.component.html',
  styleUrls: ['./home-page-product.component.css']
})
export class HomePageProductComponent implements OnInit {

  error: any;
  constructor(private router: Router,
    private jewellaryService: JewellaryPortalServiceService) { }
 
    materiallist:any;
    featureProduct:any;
  ngOnInit(): void {
    this.getMaterialList();
    this.getfeatureProductList();
  }
  getMaterialList()
  {
    this.jewellaryService.getMaterialList().subscribe(
      (data) => {
        this.materiallist = data.data;
      },
      error => this.error = error
    );
  }
  getfeatureProductList()
  {
    this.jewellaryService.getfeatureProductList().subscribe(
      (data) => {
        this.featureProduct = data.data;
      },
      error => this.error = error
    );
  }

}
