import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTestimonialComponent } from './home-page-testimonial.component';

describe('HomePageTestimonialComponent', () => {
  let component: HomePageTestimonialComponent;
  let fixture: ComponentFixture<HomePageTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
