import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Starship } from 'src/app/shared/model/starship';
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
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getStarshipData();
  }

  private getStarshipData() {
      this.starshipService
        .getStarships(1)
        .pipe(map((restPage) => restPage.results))
        .subscribe((starships) => {
          starships.map((starship) => {
            starship.starshipPilots = [];
            starship.pilots.map((url) => {
              this.pilotService.getPilots(url).pipe(map((pilot) => pilot)).subscribe(
                (pilot) => { starship.starshipPilots.push(pilot)}
              );
            });
            this.starshipDataSource.push(starship)
          });
        });
  }

  goToStarships(starshipId: number, starship: Starship) {
    this.router.navigate([`starship/${starshipId}`], {state: {data: starship}});
  }
}
