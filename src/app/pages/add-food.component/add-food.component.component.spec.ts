import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodComponentComponent } from './add-food.component.component';

describe('AddFoodComponentComponent', () => {
  let component: AddFoodComponentComponent;
  let fixture: ComponentFixture<AddFoodComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFoodComponentComponent]
    });
    fixture = TestBed.createComponent(AddFoodComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
