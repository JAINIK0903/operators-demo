//Component
import { Component } from '@angular/core';

//rxjs Operator
import { Subscription } from 'rxjs';

//Service
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-mergemap-operator',
  templateUrl: './mergemap-operator.component.html',
  styleUrls: ['./mergemap-operator.component.scss']
})
export class MergemapOperatorComponent {
  public mergeMapSubscription!: Subscription;
  public mergeMap!: number;
  constructor(private operatorsService: OperatorsService) { }
  public onClickMergeMapOperator(): void {
    this.mergeMapSubscription = this.operatorsService.mergeMap()
      .subscribe(res => {
        console.log('Merge Map operator called :- ', res);
        this.mergeMap = res;
      });
  }
  public ngOnDestroy(): void {
    if (this.mergeMapSubscription) {
      this.mergeMapSubscription.unsubscribe();
    }
  }
}
