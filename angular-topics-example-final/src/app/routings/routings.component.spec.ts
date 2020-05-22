import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingsComponent } from './routings.component';

describe('RoutingsComponent', () => {
  let component: RoutingsComponent;
  let fixture: ComponentFixture<RoutingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
