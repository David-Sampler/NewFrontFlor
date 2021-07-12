import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoBronzeComponent } from './resumo-bronze.component';

describe('ResumoBronzeComponent', () => {
  let component: ResumoBronzeComponent;
  let fixture: ComponentFixture<ResumoBronzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoBronzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoBronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
