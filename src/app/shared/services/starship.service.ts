import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeAll, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Pilot } from '../model/pilot';
import { RestPage } from '../model/restPage';
import { Starship } from '../model/starship';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  private BASE_URL: string = `https://swapi.dev/api/`;

  constructor(private http: HttpClient) {}

  public getStarships(pagenumber: number): Observable<RestPage<Starship>> {
    return this.http.get<RestPage<Starship>>(
      `${this.BASE_URL}starships/?page=${pagenumber}`
    );
  }



}
