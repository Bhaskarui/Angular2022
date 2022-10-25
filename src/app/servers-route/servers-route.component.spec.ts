import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersRouteComponent } from './servers-route.component';

describe('ServersRouteComponent', () => {
  let component: ServersRouteComponent;
  let fixture: ComponentFixture<ServersRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
