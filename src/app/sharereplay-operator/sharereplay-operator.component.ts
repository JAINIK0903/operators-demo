import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, catchError, debounceTime, distinctUntilChanged, from, of, switchMap, tap } from 'rxjs';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-sharereplay-operator',
  templateUrl: './sharereplay-operator.component.html',
  styleUrls: ['./sharereplay-operator.component.scss']
})
export class SharereplayOperatorComponent implements OnDestroy {
  public sharereplaySubscription!: Subscription;
  searchText!: string;
  breeds$!: Observable<any>;
  searchBreed$ = new Subject<string>();

  constructor(private operatorsService: OperatorsService) { }
  ngOnInit(): void {
    this.searchBreed();
  }

  search() {
    this.searchBreed$.next(this.searchText);
  }

  searchBreed() {
    this.breeds$ = this.searchBreed$.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap(searchText => this.searchBreedApi(searchText))
    );
  }

  searchBreedApi(searchText: string): Observable<any> {
    if (searchText) {
      return from(this.operatorsService.getDogBreed(searchText))
        .pipe(
          catchError((error) => {
            return of({});
          }),
          tap(() => console.log('Searching......'))
        );
    }
    return of({});
  }

  onClickShareReplyOperator() {
    this.operatorsService.shareReply().subscribe((res) => {
      console.log('Observer1 :- ', res);
    });
    this.operatorsService.shareReply().subscribe((res) => {
      console.log('Observer2 :- ', res);
    });

    setTimeout(() => {
      this.operatorsService.shareReply().subscribe((res) => {
        console.log('Observer3 :- ', res);
      });
    }, 1200);
  }

  ngOnDestroy(): void {
    if (this.sharereplaySubscription)
      this.sharereplaySubscription.unsubscribe()
  }
}
