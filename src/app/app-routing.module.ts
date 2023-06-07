import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { MergeOperatorComponent } from './merge-operator/merge-operator.component';
import { ConcatWithOperatorComponent } from './concat-with-operator/concat-with-operator.component';
import { ConcatmapOperatorComponent } from './concatmap-operator/concatmap-operator.component';
import { SwitchmapOperatorComponent } from './switchmap-operator/switchmap-operator.component';
import { TakeuntilOperatorComponent } from './takeuntil-operator/takeuntil-operator.component';
import { SharereplayOperatorComponent } from './sharereplay-operator/sharereplay-operator.component';
import { ForkjoinOperatorComponent } from './forkjoin-operator/forkjoin-operator.component';

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
    component: SwitchmapOperatorComponent
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
