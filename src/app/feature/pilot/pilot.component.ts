import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pilot } from 'src/app/shared/model/pilot';
import { Starship } from 'src/app/shared/model/starship';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  allStarship: Starship[];
  routedPilot: Pilot;

  constructor(private router: Router) { 
    if (!history.state.data && !history.state.allStarShip) {
      this.router.navigate(['/home'])
    } else {
      this.routedPilot = history.state.data;
      this.allStarship = history.state.allStarShip;
    }
  }

  ngOnInit(): void {
  }

}
