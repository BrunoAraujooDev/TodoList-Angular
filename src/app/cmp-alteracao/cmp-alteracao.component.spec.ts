import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpAlteracaoComponent } from './cmp-alteracao.component';

describe('CmpAlteracaoComponent', () => {
  let component: CmpAlteracaoComponent;
  let fixture: ComponentFixture<CmpAlteracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpAlteracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpAlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
