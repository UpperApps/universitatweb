import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pesquisador } from 'app/model/pesquisador';

@Injectable()
export class PesquisadorService {

// Mock resource
// url: string = 'http://127.0.0.1:8887/pesquisadores.json/';

url: string = '/pesquisadores';

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
