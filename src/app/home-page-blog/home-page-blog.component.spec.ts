import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBlogComponent } from './home-page-blog.component';

describe('HomePageBlogComponent', () => {
  let component: HomePageBlogComponent;
  let fixture: ComponentFixture<HomePageBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
