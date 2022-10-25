import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeObsTopicComponent } from './home-obs-topic.component';

describe('HomeObsTopicComponent', () => {
  let component: HomeObsTopicComponent;
  let fixture: ComponentFixture<HomeObsTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeObsTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeObsTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
