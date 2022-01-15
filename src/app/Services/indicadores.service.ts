import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor(
    private httpClient: HttpClient
  )
  {}

  indicatorsApiUrl: string = 'https://mindicador.cl/api/';

  public getAllIndicator(): Observable<any> {
    return this.httpClient.get<any>(this.indicatorsApiUrl);
  }

  public getIndicator(indicator: string): Observable<any> {
    return this.httpClient.get(this.indicatorsApiUrl + indicator);
  }


}

