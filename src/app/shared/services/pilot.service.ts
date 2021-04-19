import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilot } from '../model/pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) { }

  /**
   * This functiin can get a pilot
   * @param url this url to the pilot ressource
   * @returns an Observable of a pilot ressource
   */
  public getPilots(url: string): Observable<Pilot> {
    return this.http.get<Pilot>(url);
  }
}
