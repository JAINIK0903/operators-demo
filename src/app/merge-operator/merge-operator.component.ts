//Component
import { Component } from '@angular/core';

//rxjs operators
import { merge, of } from 'rxjs';

//Service
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrls: ['./merge-operator.component.scss']
})
export class MergeOperatorComponent {
  public merge!: number;
  string1$ = of('cricket');
  string2$ = of('football');
  merged$ = merge(this.string1$, this.string2$);
  constructor(private operatorsService: OperatorsService) { }
  public onClickMergeOperator(): void {
    this.merged$.subscribe((res) => {
      console.log(res);
      this.operatorsService.print(res, 'elcontainer')
    })
  }
}
