import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/shared/model/film';
import { Pilot } from 'src/app/shared/model/pilot';
import { Starship } from 'src/app/shared/model/starship';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  routedStarship: Starship;
  
  constructor(private router: Router) { 

    if (!history.state.starship) {
      this.router.navigate(['/home'])
    } else {
      this.routedStarship = history.state.starship
    }
    
  }

  ngOnInit(): void {
  }

  /**
   * This method can redirect the user to the selected pilot
   * @param pilotNumber is the pilot number
   * @param pilot is the pilot object 
   */
  goToPilot(pilotNumber: number, pilot: Pilot) {
    this.router.navigate([`pilot/${pilotNumber}`], {state: {pilot: pilot}});
  }

  /**
   * This method can redirect the user to the selected film
   * @param filmNumber is the film number
   * @param film is the film object
   */
  goToFilm(filmNumber: number, film: Film) {
    this.router.navigate([`film/${filmNumber}`], {state: {film: film}});
  }

}
