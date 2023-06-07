import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrls: ['./merge-operator.component.scss']
})
export class MergeOperatorComponent implements OnDestroy {
  public mergeSubscription!: Subscription;
  constructor(private operatorsService: OperatorsService) { }
  onClickMergeOperator() {
    this.mergeSubscription = this.operatorsService.mergeOperator().subscribe(res => {
      console.log(res);
    })
  }
  ngOnDestroy(): void {
    if (this.mergeSubscription) {
      this.mergeSubscription.unsubscribe();
    }
  }
}
