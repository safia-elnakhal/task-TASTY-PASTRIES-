import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastyWorkComponent } from './tasty-work.component';

describe('TastyWorkComponent', () => {
  let component: TastyWorkComponent;
  let fixture: ComponentFixture<TastyWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastyWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
