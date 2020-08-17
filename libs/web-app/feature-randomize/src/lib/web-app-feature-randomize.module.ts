import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RandomizeComponent } from './randomize/randomize.component';
import { WebAppUiModule } from '@legendizer/web-app/ui';
import { GameSetupStore } from './game-setup-store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WebAppUiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RandomizeComponent },
    ]),
    NgbModule,
  ],
  declarations: [RandomizeComponent],
  providers: [GameSetupStore]
})
export class WebAppFeatureRandomizeModule {}