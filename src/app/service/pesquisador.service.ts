import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pesquisador } from 'app/model/pesquisador';

@Injectable()
export class PesquisadorService {

url: string = 'http://localhost:4200/data/pesquisadores.json/';

  constructor(private http: Http) {}

  public listar(): Observable<Pesquisador[]> {
    return this.http
      .get(this.url)
      .map((response: Response) => <Pesquisador[]>response.json())
      .catch(this.handleError);
    }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }

}
