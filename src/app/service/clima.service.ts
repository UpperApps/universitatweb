import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Clima } from 'app/model/clima';

@Injectable()
export class ClimaService {

  url: string = '/api/v1/weather/locale/5959/current?token=9ee20a1a9046519eec64d322a2594794';

    constructor(private http: Http) {}

    public buscaClima(): Observable<Clima> {
      let headers = new Headers({ 'Access-Control-Allow-Origin': 'http://localhost:4200/' });
      let options = new RequestOptions({ headers: headers });

      return this.http
        .get(this.url, options)
        .map((response: Response) => <Clima>response.json())
        .catch(this.handleError);
      }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
