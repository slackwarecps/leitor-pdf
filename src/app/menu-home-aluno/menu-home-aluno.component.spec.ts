import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomeAlunoComponent } from './menu-home-aluno.component';

describe('MenuHomeAlunoComponent', () => {
  let component: MenuHomeAlunoComponent;
  let fixture: ComponentFixture<MenuHomeAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHomeAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHomeAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
