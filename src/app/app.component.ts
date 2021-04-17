import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Starship } from './shared/model/starship';
import { PilotService } from './shared/services/pilot.service';
import { StarshipService } from './shared/services/starship.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starWerious';

  starshipDataSource: Starship[] = [];

  constructor( private starshipService: StarshipService,
    private pilotService: PilotService, private router: Router) {
 // this.getStarshipData();

    console.log('constructor app.component')
    console.log(this.starshipDataSource)
  }

  ngOnInit() { 
  }

  private  getStarshipData() {
    // this.SWAPI_PAGES.map((currentPage) => {
     this.starshipService
      .getStarships(1)
      .pipe(map((restPage) => restPage.results))
      .subscribe((starships) => {
        starships.map((starship) => {
          starship.starshipPilots = [];
          starship.pilots.map((url) => {
              this.pilotService
              .getPilots(url)
              .pipe(map((pilot) => pilot))
              .subscribe((pilot) => {
                starship.starshipPilots.push(pilot);
              });
          });
          this.starshipDataSource.push(starship);
        });
      });
    // });
  }
}
