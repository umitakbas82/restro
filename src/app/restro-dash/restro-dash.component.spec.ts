import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroDashComponent } from './restro-dash.component';

describe('RestroDashComponent', () => {
  let component: RestroDashComponent;
  let fixture: ComponentFixture<RestroDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestroDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestroDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
