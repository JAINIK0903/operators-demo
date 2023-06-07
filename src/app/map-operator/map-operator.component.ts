import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent {
  public mapSubscription!: Subscription;
  constructor(private operatorsService: OperatorsService) { }
  onClickMapOperator() {
    this.mapSubscription = this.operatorsService.mapOperator().subscribe(res => {
      console.log(res);
    })
  }
  ngOnDestroy(): void {
    if (this.mapSubscription) {
      this.mapSubscription.unsubscribe();
    }
  }
}
