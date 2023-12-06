import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeparticipantsComponent } from './seeparticipants.component';

describe('SeeparticipantsComponent', () => {
  let component: SeeparticipantsComponent;
  let fixture: ComponentFixture<SeeparticipantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeparticipantsComponent]
    });
    fixture = TestBed.createComponent(SeeparticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
