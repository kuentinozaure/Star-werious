import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilot } from '../model/pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) { }

  public getPilots(url: string): Observable<Pilot> {
    return this.http.get<Pilot>(url);
  }
}
