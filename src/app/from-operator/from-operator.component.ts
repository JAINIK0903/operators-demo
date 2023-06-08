//Component
import { Component } from '@angular/core';

//rxjs Operator
import { from } from 'rxjs';

//Service
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.scss']
})
export class FromOperatorComponent {
  public from!: number;
  public obs1 = from(['1', '2', '3', '4', '5']);
  constructor(private operatorsService: OperatorsService) { }
  public onClickFromOperator(): void {
    this.obs1.subscribe(res => {
      console.log(res);
      this.operatorsService.print(res, 'elcontainer')
    })
  }
}

