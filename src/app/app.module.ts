import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { ConcatWithOperatorComponent } from './concat-with-operator/concat-with-operator.component';
import { MergeOperatorComponent } from './merge-operator/merge-operator.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { ConcatmapOperatorComponent } from './concatmap-operator/concatmap-operator.component';
import { MergemapOperatorComponent } from './mergemap-operator/mergemap-operator.component';
import { SwitchmapOperatorComponent } from './switchmap-operator/switchmap-operator.component';
import { TakeuntilOperatorComponent } from './takeuntil-operator/takeuntil-operator.component';
import { SharereplayOperatorComponent } from './sharereplay-operator/sharereplay-operator.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ForkjoinOperatorComponent } from './forkjoin-operator/forkjoin-operator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OfOperatorComponent,
    FromOperatorComponent,
    ConcatWithOperatorComponent,
    MergeOperatorComponent,
    MapOperatorComponent,
    ConcatmapOperatorComponent,
    MergemapOperatorComponent,
    SwitchmapOperatorComponent,
    TakeuntilOperatorComponent,
    SharereplayOperatorComponent,
    SidebarComponent,
    ForkjoinOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
