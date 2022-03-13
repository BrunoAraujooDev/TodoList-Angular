import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpInputComponent } from './cmp-input.component';

describe('CmpInputComponent', () => {
  let component: CmpInputComponent;
  let fixture: ComponentFixture<CmpInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
