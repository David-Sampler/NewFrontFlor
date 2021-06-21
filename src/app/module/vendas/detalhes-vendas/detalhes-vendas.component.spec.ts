import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesVendasComponent } from './detalhes-vendas.component';

describe('DetalhesVendasComponent', () => {
  let component: DetalhesVendasComponent;
  let fixture: ComponentFixture<DetalhesVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
