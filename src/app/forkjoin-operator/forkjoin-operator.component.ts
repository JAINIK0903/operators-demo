import { Component, OnDestroy } from '@angular/core';
import { Subscription, forkJoin, map } from 'rxjs';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-forkjoin-operator',
  templateUrl: './forkjoin-operator.component.html',
  styleUrls: ['./forkjoin-operator.component.scss']
})
export class ForkjoinOperatorComponent implements OnDestroy {
  public forkjoinSubscription!: Subscription;
  public output!: any[];
  constructor(private operatosService: OperatorsService) { }

  onClickForkJoinOperator() {
    const observer1 = this.operatosService.getDogBreed('hound');
    const observer2 = this.operatosService.getDogBreed('mastiff');
    const observer3 = this.operatosService.getDogBreed('retriever');

    forkJoin([observer1, observer2, observer3]).subscribe(results => {
      console.log('forkJoin data :- ', results);
      results.map((res) => {
        console.log(res);
        this.output = results;
      });
    }, error => {
      console.log('Error in forkJoin data :- ', error);
    });
  }
  ngOnDestroy(): void {
    if (this.forkjoinSubscription) {
      this.forkjoinSubscription.unsubscribe();
    }
  }
}
