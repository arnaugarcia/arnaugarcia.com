import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSpyLibComponent } from './scroll-spy-lib.component';

describe('ScrollSpyLibComponent', () => {
  let component: ScrollSpyLibComponent;
  let fixture: ComponentFixture<ScrollSpyLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollSpyLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSpyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
