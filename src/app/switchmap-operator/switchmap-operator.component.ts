//Component
import { Component, OnDestroy } from '@angular/core';

//rxjs Operator
import { Subscription } from 'rxjs';

//service
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-switchmap-operator',
  templateUrl: './switchmap-operator.component.html',
  styleUrls: ['./switchmap-operator.component.scss']
})
export class SwitchmapOperatorComponent implements OnDestroy {
  public switchMapSubscription!: Subscription;
  public switchMap!: string;
  constructor(private operatorsService: OperatorsService) { }

  public onClickSwitchMapOperator(): void {
    this.switchMapSubscription = this.operatorsService.switchMap()
      .subscribe(res => {
        console.log('Switch Map operator called :- ', res);
        this.switchMap = res;
      });
  }

  public ngOnDestroy(): void {
    if (this.switchMapSubscription) {
      this.switchMapSubscription.unsubscribe();
    }
  }
}
