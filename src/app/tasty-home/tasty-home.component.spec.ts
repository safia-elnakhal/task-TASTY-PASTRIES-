import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastyHomeComponent } from './tasty-home.component';

describe('TastyHomeComponent', () => {
  let component: TastyHomeComponent;
  let fixture: ComponentFixture<TastyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
