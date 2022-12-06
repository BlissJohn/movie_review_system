import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterloginpageComponent } from './registerloginpage.component';

describe('RegisterloginpageComponent', () => {
  let component: RegisterloginpageComponent;
  let fixture: ComponentFixture<RegisterloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterloginpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
