import { TestBed, inject } from '@angular/core/testing';

import { ProjetosPesquisaService } from './projetos-pesquisa.service';

describe('ProjetosPesquisaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetosPesquisaService]
    });
  });

  it('should ...', inject([ProjetosPesquisaService], (service: ProjetosPesquisaService) => {
    expect(service).toBeTruthy();
  }));
});
