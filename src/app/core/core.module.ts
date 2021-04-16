import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '../feature/feature.module';



@NgModule({
  declarations: [
    FeatureModule
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
