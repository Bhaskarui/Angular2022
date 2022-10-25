import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObsTopicComponent } from './user-obs-topic.component';

describe('UserObsTopicComponent', () => {
  let component: UserObsTopicComponent;
  let fixture: ComponentFixture<UserObsTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserObsTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObsTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
