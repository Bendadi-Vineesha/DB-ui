import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsubscribebooksofreaderComponent } from './getsubscribebooksofreader.component';

describe('GetsubscribebooksofreaderComponent', () => {
  let component: GetsubscribebooksofreaderComponent;
  let fixture: ComponentFixture<GetsubscribebooksofreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsubscribebooksofreaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetsubscribebooksofreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
