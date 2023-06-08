//Component
import { Component } from '@angular/core';

//rxjs Operators
import { map, of } from 'rxjs';

//Service
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent {
  string1$ = of('1', '2', '3', '4', '5');
  mapped$ = this.string1$.pipe(map((res) => res.concat('10')));

  public map!: number;
  constructor(private operatorsService: OperatorsService) { }
  public onClickMapOperator(): void {
    this.mapped$.subscribe((res) => {
      console.log(res);
      this.operatorsService.print(res, 'elcontainer')
    })
  }
}

