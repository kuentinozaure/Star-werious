import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pilot } from 'src/app/shared/model/pilot';
import { Starship } from 'src/app/shared/model/starship';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  routedStaship: Starship;
  allStarShip: Starship[];

  constructor(private router: Router) { 

    if (!history.state.data && !history.state.allStarShip) {
      this.router.navigate(['/home'])
    } else {
      this.routedStaship = history.state.data
      this.allStarShip = history.state.allStarShip
    }
    
  }

  ngOnInit(): void {
  }

  goToPilot(numberIndex: number, pilot: Pilot) {
    this.router.navigate([`pilot/${numberIndex}`], {state: {data: pilot}});
  }

}
