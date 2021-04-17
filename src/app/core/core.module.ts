import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavigationDrawerComponent } from './components/navigation-drawer/navigation-drawer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ToolbarComponent,
    NavigationDrawerComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ToolbarComponent,
    NavigationDrawerComponent
  ]
})
export class CoreModule { }
