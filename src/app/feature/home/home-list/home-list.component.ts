import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Starship } from 'src/app/shared/model/starship';
import { FilmService } from 'src/app/shared/services/film.service';
import { PilotService } from 'src/app/shared/services/pilot.service';
import { StarshipService } from 'src/app/shared/services/starship.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
})
export class HomeListComponent implements OnInit {
  public starshipDataSource: Starship[] = [];


  constructor(
    private starshipService: StarshipService,
    private pilotService: PilotService,
    private filmService: FilmService,
    private router: Router
  ) {
    this.getStarshipData();
  }

  ngOnInit(): void {
  }

  /**
   * This method get starships list, films list, pilot list
   */
  private getStarshipData() {
      this.starshipService
        .getStarships()
        .pipe(map((restPage) => restPage.results))
        .subscribe((starships) => {
          starships.map((starship) => {

            // Initialize the starship pilot and film array to store pilot and film
            starship.starshipPilots = [];
            starship.starshipFilms = [];


            starship.pilots.map((url) => {
              // replace http to https for heroku (heroku block access to http ressource)
              this.pilotService.getPilots(url.replace('http','https')).pipe(map((pilot) => pilot)).subscribe(
                (pilot) => { starship.starshipPilots.push(pilot)}
              );
            });

            starship.films.map((url) => {
              // replace http to https for heroku (heroku block access to http ressource)
              this.filmService.getFilm(url.replace('http','https')).pipe(map((film) => film)).subscribe(
                (film) => { starship.starshipFilms.push(film)}
              );
            });

            // replace the `old starship` by starship updated (film, pilot) to the starships list
            this.starshipDataSource.push(starship)
          });
        });
  }

  /**
   * This method can redirect the link tab in the template to the starship selected
   * @param starshipId index of the starship on the list
   * @param starship starship array contains in starship list
   */
  goToStarships(starshipId: number, starship: Starship) {
    this.router.navigate([`starship/${starshipId}`], {state: {starship: starship}});
  }
}
