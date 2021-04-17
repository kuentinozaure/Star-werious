import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule],
    exports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule],

})

export class MaterialModule {}