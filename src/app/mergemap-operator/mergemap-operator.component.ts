import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
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
  onClickMergeMapOperator() {
    this.mergeMapSubscription = this.operatorsService.mergeMap()
      .subscribe(res => {
        console.log('Merge Map operator called :- ', res);
        this.mergeMap = res;
      });
  }
  ngOnDestroy(): void {
    if (this.mergeMapSubscription) {
      this.mergeMapSubscription.unsubscribe();
    }
  }
}
