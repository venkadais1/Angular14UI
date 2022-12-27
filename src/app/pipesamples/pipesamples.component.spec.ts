import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesamplesComponent } from './pipesamples.component';

describe('PipesamplesComponent', () => {
  let component: PipesamplesComponent;
  let fixture: ComponentFixture<PipesamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
