import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsFullScreenComponent } from './cats-full-screen.component';

describe('CatsFullScreenComponent', () => {
  let component: CatsFullScreenComponent;
  let fixture: ComponentFixture<CatsFullScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsFullScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
