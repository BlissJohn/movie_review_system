import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletmovieComponent } from './deletmovie.component';

describe('DeletmovieComponent', () => {
  let component: DeletmovieComponent;
  let fixture: ComponentFixture<DeletmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
