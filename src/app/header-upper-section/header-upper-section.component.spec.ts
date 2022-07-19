import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUpperSectionComponent } from './header-upper-section.component';

describe('HeaderUpperSectionComponent', () => {
  let component: HeaderUpperSectionComponent;
  let fixture: ComponentFixture<HeaderUpperSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUpperSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUpperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
