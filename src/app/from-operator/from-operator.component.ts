import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.scss']
})
export class FromOperatorComponent implements OnDestroy {
  public fromSubscription!: Subscription;
  constructor(private operatorsService: OperatorsService) { }
  onClickFromOperator() {
    this.fromSubscription = this.operatorsService.fromOperator().subscribe(res => {
      console.log(res);

    })
  }

  ngOnDestroy(): void {
    if (this.fromSubscription) {
      this.fromSubscription.unsubscribe();
    }
  }
}
