import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestPage } from '../model/restPage';
import { Starship } from '../model/starship';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  private BASE_URL: string = `https://swapi.dev/api/`;

  constructor(private http: HttpClient) {}

  /**
   * This function can get the starship list paginate
   * @returns an Observable of a starship list paginate
   */
  public getStarships(): Observable<RestPage<Starship>> {
    return this.http.get<RestPage<Starship>>(
      `${this.BASE_URL}starships/`
    );
  }



}
