import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pilot } from 'src/app/shared/model/pilot';
@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  routedPilot: Pilot;

  constructor(private router: Router) { 
    
    if (!history.state.pilot) {
      this.router.navigate(['/home'])
    } else {
      this.routedPilot = history.state.pilot;
    }
  }

  ngOnInit(): void {
  }

}
