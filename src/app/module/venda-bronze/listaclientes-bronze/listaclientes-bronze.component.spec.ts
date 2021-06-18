import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaclientesBronzeComponent } from './listaclientes-bronze.component';

describe('ListaclientesBronzeComponent', () => {
  let component: ListaclientesBronzeComponent;
  let fixture: ComponentFixture<ListaclientesBronzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaclientesBronzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaclientesBronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
