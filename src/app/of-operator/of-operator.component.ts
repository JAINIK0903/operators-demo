//Component
import { Component, ViewContainerRef } from '@angular/core';

//rxjs Operator
import { Subscription } from 'rxjs';

//Service
import { OperatorsService } from '../services/operators.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.scss']
})
export class OfOperatorComponent {
  public ofSubscription!: Subscription;
  public of!: object;
  public ofList!: object;

  constructor(private operatorsService: OperatorsService, private viewContainerRef: ViewContainerRef) { }
  public onClickOfOperator(): void {
    this.ofSubscription = this.operatorsService.ofOperator().subscribe(res => {
      const containerRef = this.viewContainerRef.createComponent(AlertComponent);
      containerRef.instance.alert();
      console.log(res);
      this.of = res;
    });
  }

  public onClickOfOperatorWithList(): void {
    this.ofSubscription = this.operatorsService.ofOperatorWithList().subscribe(res => {
      console.log(res);
      this.ofList = res;

    });
  }
  public ngOnDestroy(): void {
    if (this.ofSubscription) {
      this.ofSubscription.unsubscribe()
    }
  }
}