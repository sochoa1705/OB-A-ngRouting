import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCotactPageComponent } from './random-contact-page.component';

describe('RandomCotactPageComponent', () => {
  let component: RandomCotactPageComponent;
  let fixture: ComponentFixture<RandomCotactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCotactPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomCotactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
