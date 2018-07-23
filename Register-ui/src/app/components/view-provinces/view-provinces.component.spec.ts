import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProvincesComponent } from './view-provinces.component';

describe('ViewProvincesComponent', () => {
  let component: ViewProvincesComponent;
  let fixture: ComponentFixture<ViewProvincesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProvincesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProvincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
