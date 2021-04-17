import { NgModule } from '@angular/core';
import { StarshipComponent } from './starship.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StarshipComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: StarshipComponent
      }
    ])
  ]
})
export class StarshipModule { }
