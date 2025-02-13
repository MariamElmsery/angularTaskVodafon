import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSkeletonComponent } from './navbar-skeleton.component';

describe('NavbarSkeletonComponent', () => {
  let component: NavbarSkeletonComponent;
  let fixture: ComponentFixture<NavbarSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
