import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.scss']
})
export class OfOperatorComponent {
  public ofSubscription!: Subscription;
  user: object[] = [{ name: 'Jainik', gender: 'Male' }, { name: 'Mohit', gender: 'Male' }, { name: 'Nirmit', gender: 'Male' }]

  constructor(private operatorsService: OperatorsService) { }
  onClickOfOperator() {
    this.ofSubscription = this.operatorsService.ofOperator().subscribe(res => {
      console.log(res);
    });
  }

  onClickOfOperatorWithList() {
    this.ofSubscription = this.operatorsService.ofOperatorWithList().subscribe(res => {
      console.log(res);

    })
  }
  ngOnDestroy(): void {
    if (this.ofSubscription) {
      this.ofSubscription.unsubscribe();
    }
  }
}
