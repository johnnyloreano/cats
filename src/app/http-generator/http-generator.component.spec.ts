import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGeneratorComponent } from './http-generator.component';

describe('HttpGeneratorComponent', () => {
  let component: HttpGeneratorComponent;
  let fixture: ComponentFixture<HttpGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
