import {
  Component,
  OnInit
} from '@angular/core';
import {
  PesquisadorService
} from 'app/service/pesquisador.service';
import {
  Pesquisador
} from 'app/model/pesquisador';
import {
  MatPaginator,
  MatTableDataSource
} from '@angular/material';

@Component({
  selector: 'app-pesquisadores',
  templateUrl: './pesquisadores.component.html',
  styleUrls: ['./pesquisadores.component.css'],
  providers: [PesquisadorService]
})

export class PesquisadoresComponent implements OnInit {

  pesquisadores: Pesquisador[];
  displayedColumns = ['id', 'nome', 'cpf'];
  dataSource = new MatTableDataSource < Pesquisador > ();

  constructor(
    private pesquisadorService: PesquisadorService
  ) {}

  ngOnInit() {
    this.pesquisadorService.listar()
      .subscribe(
        pesquisadores => this.pesquisadores = pesquisadores,
        erro => console.log(erro)
      );
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    this.dataSource.data = this.pesquisadores;
  }

}
