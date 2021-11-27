import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandiasComponent } from './sandias.component';

describe('SandiasComponent', () => {
  let component: SandiasComponent;
  let fixture: ComponentFixture<SandiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
