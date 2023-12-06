import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworkshopComponent } from './addworkshop.component';

describe('AddworkshopComponent', () => {
  let component: AddworkshopComponent;
  let fixture: ComponentFixture<AddworkshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddworkshopComponent]
    });
    fixture = TestBed.createComponent(AddworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
