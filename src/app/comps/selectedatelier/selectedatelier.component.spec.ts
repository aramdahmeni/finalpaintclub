import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedatelierComponent } from './selectedatelier.component';

describe('SelectedatelierComponent', () => {
  let component: SelectedatelierComponent;
  let fixture: ComponentFixture<SelectedatelierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedatelierComponent]
    });
    fixture = TestBed.createComponent(SelectedatelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
