import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCtrl } from './navigation-ctrl';

describe('NavigationCtrl', () => {
  let component: NavigationCtrl;
  let fixture: ComponentFixture<NavigationCtrl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationCtrl],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationCtrl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
