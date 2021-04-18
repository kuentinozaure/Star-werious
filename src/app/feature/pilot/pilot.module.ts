import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotComponent } from './pilot.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PilotComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PilotComponent
      }
    ])
  ]
})
export class PilotModule { }
