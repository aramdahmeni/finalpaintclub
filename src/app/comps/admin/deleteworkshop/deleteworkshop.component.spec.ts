import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteworkshopComponent } from './deleteworkshop.component';

describe('DeleteworkshopComponent', () => {
  let component: DeleteworkshopComponent;
  let fixture: ComponentFixture<DeleteworkshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteworkshopComponent]
    });
    fixture = TestBed.createComponent(DeleteworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
