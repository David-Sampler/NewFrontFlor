import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaBronzeComponent } from './venda-bronze.component';

describe('VendaBronzeComponent', () => {
  let component: VendaBronzeComponent;
  let fixture: ComponentFixture<VendaBronzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaBronzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaBronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
