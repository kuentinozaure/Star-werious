import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/shared/model/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  routedFilm: Film;
  
  constructor(private router: Router) { 
    if (!history.state.film ) {
      this.router.navigate(['/home'])
    } else {
      this.routedFilm = history.state.film
    }
  }

  ngOnInit(): void {
  }

}
