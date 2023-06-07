import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-concat-with-operator',
  templateUrl: './concat-with-operator.component.html',
  styleUrls: ['./concat-with-operator.component.scss']
})
export class ConcatWithOperatorComponent implements OnDestroy {
  public concatwithSubscription!: Subscription;
  public concatWith!: number;
  constructor(private operatorsService: OperatorsService) { }
  onClickConcatWithOperator() {
    this.concatwithSubscription = this.operatorsService.concatWithOperator().subscribe(res => {
      console.log(res);
      this.concatWith = res;
    })
  }
  ngOnDestroy(): void {
    if (this.concatwithSubscription) {
      this.concatwithSubscription.unsubscribe();
    }
  }
}
