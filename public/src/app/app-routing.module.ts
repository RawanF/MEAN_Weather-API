import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
// import { SanjoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'burbank',component: BurbankComponent },
  { path: 'chicago',component: ChicagoComponent },
  { path: 'dallas',component: DallasComponent },
  // { path: 'san-jose',component: SanjoseComponent },
  { path: 'seattle',component: SeattleComponent },
  { path: 'washington',component: WashingtonComponent },

  // // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
