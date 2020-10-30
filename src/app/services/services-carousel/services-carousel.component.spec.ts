import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCarouselComponent } from './services-carousel.component';

describe('ServicesCarouselComponent', () => {
  let component: ServicesCarouselComponent;
  let fixture: ComponentFixture<ServicesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
