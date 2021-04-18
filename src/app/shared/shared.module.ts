import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { RouterModule } from "@angular/router";

const commonModule = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  MaterialModule,
];

@NgModule({
  declarations: [],
  imports: [...commonModule],
  exports: [...commonModule],
})
export class SharedModule {}
