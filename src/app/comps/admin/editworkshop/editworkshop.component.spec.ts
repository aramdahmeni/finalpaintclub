import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditworkshopComponent } from './editworkshop.component';

describe('EditworkshopComponent', () => {
  let component: EditworkshopComponent;
  let fixture: ComponentFixture<EditworkshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditworkshopComponent]
    });
    fixture = TestBed.createComponent(EditworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
