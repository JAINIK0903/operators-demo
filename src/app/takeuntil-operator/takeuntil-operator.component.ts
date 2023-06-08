//Component
import { Component, OnDestroy } from '@angular/core';

//rxjs Operators
import { Subscription, take, timer, takeUntil } from 'rxjs';

//Service
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-takeuntil-operator',
  templateUrl: './takeuntil-operator.component.html',
  styleUrls: ['./takeuntil-operator.component.scss']
})
export class TakeuntilOperatorComponent implements OnDestroy {
  public takeuntilSubscription!: Subscription;
  public result!: string;
  public takeUntil!: number;
  constructor(private operatorsService: OperatorsService) { }

  public onClickTakeOperator(): void {
    this.takeuntilSubscription = this.operatorsService.concatMapWithAPI()
      .pipe(take(2))
      .subscribe(res => {
        console.log('Take operator called :- ', res);
        this.result = res;
      });
  }

  public onClickTakeUntilOperator(): void {
    const timer$ = timer(4000);

    this.takeuntilSubscription = this.operatorsService.takeUntil()
      .pipe(takeUntil(timer$))
      .subscribe(res => {
        console.log('Take Until operator called :- ', res);
        this.takeUntil = res
      });
  }

  public ngOnDestroy(): void {
    if (this.takeuntilSubscription) {
      this.takeuntilSubscription.unsubscribe();
    }
  }

}
