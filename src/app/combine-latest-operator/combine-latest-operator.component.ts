import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html',
  styleUrls: ['./combine-latest-operator.component.scss']
})
export class CombineLatestOperatorComponent implements OnDestroy {
  public combinedRange!: object;
  public rangeSubscription!: Subscription;
  constructor(private operatorsService: OperatorsService) { }
  public onClickOfCombineLatestOperator() {
    this.rangeSubscription = this.operatorsService.combineLatestOperator().subscribe((res) => {
      console.log(res);
      this.combinedRange = res;
    })
  }
  public ngOnDestroy(): void {
    this.rangeSubscription.unsubscribe();
  }
}
