import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerDeductionbarodaComponent } from './create-customer-deductionbaroda.component';

describe('CreateCustomerDeductionbarodaComponent', () => {
  let component: CreateCustomerDeductionbarodaComponent;
  let fixture: ComponentFixture<CreateCustomerDeductionbarodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomerDeductionbarodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerDeductionbarodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
