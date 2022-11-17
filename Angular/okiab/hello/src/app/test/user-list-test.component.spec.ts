import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTestComponent } from './user-list-test.component';

describe('UserListTestComponent', () => {
  let component: UserListTestComponent;
  let fixture: ComponentFixture<UserListTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
