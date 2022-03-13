import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpListaComponent } from './cmp-lista.component';

describe('CmpListaComponent', () => {
  let component: CmpListaComponent;
  let fixture: ComponentFixture<CmpListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
