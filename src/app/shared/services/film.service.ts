import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../model/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  /**
   * This function can get a film by a link
   * @param url url of a film
   * @returns an observale for a film
   */
  public getFilm(url: string): Observable<Film> {
    return this.http.get<Film>(url);
  }
}
