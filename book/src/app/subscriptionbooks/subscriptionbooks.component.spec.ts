import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionbooksComponent } from './subscriptionbooks.component';

describe('SubscriptionbooksComponent', () => {
  let component: SubscriptionbooksComponent;
  let fixture: ComponentFixture<SubscriptionbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
