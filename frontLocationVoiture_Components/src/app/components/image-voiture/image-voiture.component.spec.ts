import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageVoitureComponent } from './image-voiture.component';

describe('ImageVoitureComponent', () => {
  let component: ImageVoitureComponent;
  let fixture: ComponentFixture<ImageVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageVoitureComponent]
    });
    fixture = TestBed.createComponent(ImageVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
