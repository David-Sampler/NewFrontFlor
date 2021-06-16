import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVendasCombosComponent } from './lista-vendas-combos.component';

describe('ListaVendasCombosComponent', () => {
  let component: ListaVendasCombosComponent;
  let fixture: ComponentFixture<ListaVendasCombosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVendasCombosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVendasCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
