import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheVoitureComponent } from './recherche-voiture.component';

describe('RechercheVoitureComponent', () => {
  let component: RechercheVoitureComponent;
  let fixture: ComponentFixture<RechercheVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheVoitureComponent]
    });
    fixture = TestBed.createComponent(RechercheVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
