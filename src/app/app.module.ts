import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { BrandsComponent } from './brands/brands.component';
import { HeaderUpperSectionComponent } from './header-upper-section/header-upper-section.component';
import { HomePageProductComponent } from './home-page-product/home-page-product.component';
import { HomePageBlogComponent } from './home-page-blog/home-page-blog.component';
import { HomePageTestimonialComponent } from './home-page-testimonial/home-page-testimonial.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HomeTopSectionComponent } from './home-top-section/home-top-section.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    BrandsComponent,
    HeaderUpperSectionComponent,
    HomePageProductComponent,
    HomePageBlogComponent,
    HomePageTestimonialComponent,
    HeaderMenuComponent,
    HomeTopSectionComponent,
    ProductListComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
