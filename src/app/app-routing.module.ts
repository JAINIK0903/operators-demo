//Module
import { NgModule } from '@angular/core';

//Routing Module
import { RouterModule, Routes } from '@angular/router';

//Components
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { MergeOperatorComponent } from './merge-operator/merge-operator.component';
import { ConcatWithOperatorComponent } from './concat-with-operator/concat-with-operator.component';
import { ConcatmapOperatorComponent } from './concatmap-operator/concatmap-operator.component';
import { SwitchmapOperatorComponent } from './switchmap-operator/switchmap-operator.component';
import { TakeuntilOperatorComponent } from './takeuntil-operator/takeuntil-operator.component';
import { SharereplayOperatorComponent } from './sharereplay-operator/sharereplay-operator.component';
import { ForkjoinOperatorComponent } from './forkjoin-operator/forkjoin-operator.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { MergemapOperatorComponent } from './mergemap-operator/mergemap-operator.component';

const routes: Routes = [
  {
    path: 'of',
    component: OfOperatorComponent,
  },
  {
    path: 'from',
    component: FromOperatorComponent
  },
  {
    path: 'map',
    component: MapOperatorComponent
  },
  {
    path: 'merge',
    component: MergeOperatorComponent
  },
  {
    path: 'concatwith',
    component: ConcatWithOperatorComponent
  },
  {
    path: 'concatmap',
    component: ConcatmapOperatorComponent
  },
  {
    path: 'mergemap',
    component: MergemapOperatorComponent
  },
  {
    path: 'switchmap',
    component: SwitchmapOperatorComponent
  },
  {
    path: 'takeuntil',
    component: TakeuntilOperatorComponent
  },
  {
    path: 'sharereplay',
    component: SharereplayOperatorComponent
  },
  {
    path: 'forkjoin',
    component: ForkjoinOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
