import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMessagePageComponent } from './main-message-page.component';

describe('MainMessagePageComponent', () => {
  let component: MainMessagePageComponent;
  let fixture: ComponentFixture<MainMessagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMessagePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMessagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
