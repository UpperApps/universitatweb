import { TestBed, inject } from '@angular/core/testing';

import { PesquisadorService } from './pesquisador.service';

describe('PesquisadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesquisadorService]
    });
  });

  it('should ...', inject([PesquisadorService], (service: PesquisadorService) => {
    expect(service).toBeTruthy();
  }));
});
