//Component
import { Component } from '@angular/core';

//rxjs operators
import { concatWith, of } from 'rxjs';

//Service
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-concat-with-operator',
  templateUrl: './concat-with-operator.component.html',
  styleUrls: ['./concat-with-operator.component.scss']
})
export class ConcatWithOperatorComponent {
  string1$ = of('hello', 'jainik');
  string2$ = of('welcome', 'back');
  concat$ = this.string1$.pipe(concatWith(this.string2$));
  constructor(private operatorsService: OperatorsService) { }
  public onClickConcatWithOperator(): void {
    this.concat$.subscribe((res) => {
      console.log(res);
      this.operatorsService.print(res, 'elcontainer')
    })
  }
}
