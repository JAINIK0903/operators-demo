import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-concatmap-operator',
  templateUrl: './concatmap-operator.component.html',
  styleUrls: ['./concatmap-operator.component.scss']
})
export class ConcatmapOperatorComponent implements OnDestroy {
  public concatmapSubscription!: Subscription;
  public concatMap!: string;
  constructor(private operatorsService: OperatorsService) { }

  onClickConcatMapOperator() {
    this.concatmapSubscription = this.operatorsService.concatMapWithAPI()
      .subscribe(res => {
        console.log('Concat Map with API operator called :- ', res);
        this.concatMap = res;
      });
  }
  ngOnDestroy(): void {
    if (this.concatmapSubscription) {
      this.concatmapSubscription.unsubscribe();
    }
  }
}
