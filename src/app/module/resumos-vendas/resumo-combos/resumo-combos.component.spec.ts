import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoCombosComponent } from './resumo-combos.component';

describe('ResumoCombosComponent', () => {
  let component: ResumoCombosComponent;
  let fixture: ComponentFixture<ResumoCombosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoCombosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
