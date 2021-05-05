import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerDeductionhdfcComponent } from './create-customer-deductionhdfc.component';

describe('CreateCustomerDeductionComponent', () => {
  let component: CreateCustomerDeductionhdfcComponent;
  let fixture: ComponentFixture<CreateCustomerDeductionhdfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomerDeductionhdfcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerDeductionhdfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
