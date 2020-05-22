import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsAndDataBindingsComponent } from './components-and-data-bindings.component';

describe('ComponentsAndDataBindingsComponent', () => {
  let component: ComponentsAndDataBindingsComponent;
  let fixture: ComponentFixture<ComponentsAndDataBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsAndDataBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsAndDataBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
