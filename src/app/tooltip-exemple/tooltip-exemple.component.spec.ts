import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipExempleComponent } from './tooltip-exemple.component';

describe('TooltipExempleComponent', () => {
  let component: TooltipExempleComponent;
  let fixture: ComponentFixture<TooltipExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
