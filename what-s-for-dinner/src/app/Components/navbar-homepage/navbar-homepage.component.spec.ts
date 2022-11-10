import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHomepageComponent } from './navbar-homepage.component';

describe('NavbarHomepageComponent', () => {
  let component: NavbarHomepageComponent;
  let fixture: ComponentFixture<NavbarHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
