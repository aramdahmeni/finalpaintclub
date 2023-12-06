import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeworkshopComponent } from './seeworkshop.component';

describe('SeeworkshopComponent', () => {
  let component: SeeworkshopComponent;
  let fixture: ComponentFixture<SeeworkshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeworkshopComponent]
    });
    fixture = TestBed.createComponent(SeeworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
