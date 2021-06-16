import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarComboComponent } from './finalizar-combo.component';

describe('FinalizarComboComponent', () => {
  let component: FinalizarComboComponent;
  let fixture: ComponentFixture<FinalizarComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
