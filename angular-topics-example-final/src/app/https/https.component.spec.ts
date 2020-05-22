import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpsComponent } from './https.component';

describe('HttpsComponent', () => {
  let component: HttpsComponent;
  let fixture: ComponentFixture<HttpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
