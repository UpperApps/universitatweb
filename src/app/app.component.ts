import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  Clima
} from 'app/model/clima';
import {
  ClimaService
} from 'app/service/clima.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClimaService],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AppComponent {
  clima: Clima;

  constructor(private climaService: ClimaService) {
    this.clima = new Clima();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.climaService.buscaClima()
      .subscribe(
        clima => this.clima = clima,
        erro => console.log('Erro ao buscar o clima')
      );
  }

}
