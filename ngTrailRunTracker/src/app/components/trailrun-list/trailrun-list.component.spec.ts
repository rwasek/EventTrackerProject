import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailrunListComponent } from './trailrun-list.component';

describe('TrailrunListComponent', () => {
  let component: TrailrunListComponent;
  let fixture: ComponentFixture<TrailrunListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailrunListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailrunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
