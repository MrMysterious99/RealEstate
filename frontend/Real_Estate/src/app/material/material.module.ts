import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';

const MaterialComponents = [ 
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatGridListModule,
  MatTooltipModule
]

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
