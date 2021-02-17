import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPostComponent } from './farmer-post.component';

describe('FarmerPostComponent', () => {
  let component: FarmerPostComponent;
  let fixture: ComponentFixture<FarmerPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
