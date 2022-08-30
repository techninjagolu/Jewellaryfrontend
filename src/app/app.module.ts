import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';

import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
const fbLoginOptions = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
}; 


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
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('991244761536379',fbLoginOptions)
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("488883956600-5q6303jtt2bm2ieb6cuj2tvrjlu4o0b5.apps.googleusercontent.com")
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
