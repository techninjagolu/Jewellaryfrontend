import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { JewellaryPortalServiceService } from '../service/jewellary-portal-service.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit  {
  error: any;
  constructor( private router: Router,
    private jewellaryService: JewellaryPortalServiceService) { }
  categorylist:any;
  ngOnInit(): void {
    console.log("Hi");
    this.getCategoryList();
  }
  getCategoryList()
  {
    this.jewellaryService.getCategoryList().subscribe(
      (data) => {
        this.categorylist = data.data;
      },
      error => this.error = error
    );
  }
 
}

