import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public data = [
      {name: 'test', email: 'test@gmail.com', website:'test.com'},
      {name: 'test', email: 'test@gmail.com', website:'test.com'},
      {name: 'test', email: 'test@gmail.com', website:'test.com'},
      {name: 'test', email: 'test@gmail.com', website:'test.com'},
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
