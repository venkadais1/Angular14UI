import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesamplesComponent } from './directivesamples.component';

describe('DirectivesamplesComponent', () => {
  let component: DirectivesamplesComponent;
  let fixture: ComponentFixture<DirectivesamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
