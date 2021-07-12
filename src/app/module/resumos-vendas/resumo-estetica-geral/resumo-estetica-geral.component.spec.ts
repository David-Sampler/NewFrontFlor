import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoEsteticaGeralComponent } from './resumo-estetica-geral.component';

describe('ResumoEsteticaGeralComponent', () => {
  let component: ResumoEsteticaGeralComponent;
  let fixture: ComponentFixture<ResumoEsteticaGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoEsteticaGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoEsteticaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
