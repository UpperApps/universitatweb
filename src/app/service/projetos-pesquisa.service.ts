import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProjetoPesquisa } from 'app/model/projeto-pesquisa';

@Injectable()
export class ProjetosPesquisaService {

  // Mock resource
  // url: string = 'http://127.0.0.1:8887/projetos-pesquisa.json/';

  url: string = '/projetospesquisa';

  constructor(private http: Http) {}

    public listar(): Observable<ProjetoPesquisa[]> {
      return this.http
        .get(this.url)
        .map((response: Response) => <ProjetoPesquisa[]>response.json())
        .catch(this.handleError);
      }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
