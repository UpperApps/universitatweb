import {
  Component,
  OnInit
} from '@angular/core';
import {
  ProjetosPesquisaService
} from 'app/service/projetos-pesquisa.service';
import {
  ProjetoPesquisa
} from 'app/model/projeto-pesquisa';
import {
  MatPaginator,
  MatTableDataSource
} from '@angular/material';

@Component({
  selector: 'app-projetos-pesquisa',
  templateUrl: './projetos-pesquisa.component.html',
  styleUrls: ['./projetos-pesquisa.component.css'],
  providers: [ProjetosPesquisaService]
})
export class ProjetosPesquisaComponent implements OnInit {

  projetosPesquisa: ProjetoPesquisa[];
  displayedColumns = ['id', 'titulo', 'tempo_previsto', 'data_inicio', 'data_fim', 'status'];
  dataSource = new MatTableDataSource < ProjetoPesquisa > ();

  constructor(private projetosPesquisaService: ProjetosPesquisaService) {}

  ngOnInit() {
    this.projetosPesquisaService.listar()
      .subscribe(
        projetosPesquisa => this.projetosPesquisa = projetosPesquisa,
        erro => console.log(erro)
      );
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    this.dataSource.data = this.projetosPesquisa;
  }

}
