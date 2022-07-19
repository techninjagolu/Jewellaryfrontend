import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopSectionComponent } from './home-top-section.component';

describe('HomeTopSectionComponent', () => {
  let component: HomeTopSectionComponent;
  let fixture: ComponentFixture<HomeTopSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
