import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WebAppUiModule } from '@legendizer/web-app/ui';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@legendizer/web-app/feature-home').then(
        (module) => module.WebAppFeatureHomeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@legendizer/web-app/feature-home').then(
        (module) => module.WebAppFeatureHomeModule
      ),
  },
  {
    path: 'randomize',
    loadChildren: () =>
      import('@legendizer/web-app/feature-randomize').then(
        (module) => module.WebAppFeatureRandomizeModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {}),
    NgbModule,
    WebAppUiModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
