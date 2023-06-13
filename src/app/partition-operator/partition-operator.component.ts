import { Component } from '@angular/core';
import { of, partition } from 'rxjs';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-partition-operator',
  templateUrl: './partition-operator.component.html',
  styleUrls: ['./partition-operator.component.scss']
})
export class PartitionOperatorComponent {
  constructor(private operatorsService: OperatorsService) { }
  public onClickOfPartitionOperator() {
    const observableValues = of('1, 2, 3', ' 4, 5, 6', '7,8,9,10,11,12');
    const [evens$, odds$] = partition(observableValues, value => value.length % 2 === 0);

    odds$.subscribe(x => {
      console.log('odds', x);
      this.operatorsService.print(x, 'elcontainer');
      // this.partition = x;
    });
    evens$.subscribe(x => {
      console.log('evens', x);
      this.operatorsService.print(x, 'elcontainer');
      // this.partition = x;
    });
  }
}
