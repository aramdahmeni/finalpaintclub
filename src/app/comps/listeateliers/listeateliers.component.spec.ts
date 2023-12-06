import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeateliersComponent } from './listeateliers.component';

describe('ListeateliersComponent', () => {
  let component: ListeateliersComponent;
  let fixture: ComponentFixture<ListeateliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeateliersComponent]
    });
    fixture = TestBed.createComponent(ListeateliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
