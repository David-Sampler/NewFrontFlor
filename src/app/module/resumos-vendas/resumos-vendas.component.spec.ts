import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumosVendasComponent } from './resumos-vendas.component';

describe('ResumosVendasComponent', () => {
  let component: ResumosVendasComponent;
  let fixture: ComponentFixture<ResumosVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumosVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumosVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
