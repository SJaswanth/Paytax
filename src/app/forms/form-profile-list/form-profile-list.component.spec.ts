import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileListComponent } from './form-profile-list.component';

describe('FormProfileListComponent', () => {
  let component: FormProfileListComponent;
  let fixture: ComponentFixture<FormProfileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
