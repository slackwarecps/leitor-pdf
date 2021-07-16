import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstituicaoComponent } from './home-instituicao.component';

describe('HomeInstituicaoComponent', () => {
  let component: HomeInstituicaoComponent;
  let fixture: ComponentFixture<HomeInstituicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInstituicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
