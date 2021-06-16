import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComboComponent } from './upload-combo.component';

describe('UploadComboComponent', () => {
  let component: UploadComboComponent;
  let fixture: ComponentFixture<UploadComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
