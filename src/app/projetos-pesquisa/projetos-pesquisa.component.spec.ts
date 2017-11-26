import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosPesquisaComponent } from './projetos-pesquisa.component';

describe('ProjetosPesquisaComponent', () => {
  let component: ProjetosPesquisaComponent;
  let fixture: ComponentFixture<ProjetosPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
