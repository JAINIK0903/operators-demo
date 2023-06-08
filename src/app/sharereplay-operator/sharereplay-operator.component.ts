//Component
import { Component, OnDestroy } from '@angular/core';

//rxjs Operators
import { Observable, Subject, Subscription, catchError, debounceTime, distinctUntilChanged, from, of, switchMap, tap } from 'rxjs';

//service
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-sharereplay-operator',
  templateUrl: './sharereplay-operator.component.html',
  styleUrls: ['./sharereplay-operator.component.scss']
})
export class SharereplayOperatorComponent implements OnDestroy {
  public sharereplaySubscription!: Subscription;
  public searchText!: string;
  public breeds$!: Observable<string>;
  public searchBreed$ = new Subject<string>();

  constructor(private operatorsService: OperatorsService) { }
  public ngOnInit(): void {
    this.searchBreed();
  }

  public search(): void {
    this.searchBreed$.next(this.searchText);
  }

  public searchBreed(): void {
    this.breeds$ = this.searchBreed$.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap(searchText => this.searchBreedApi(searchText))
    );
  }

  public searchBreedApi(searchText: string): Observable<any> {
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

  public onClickShareReplyOperator(): void {
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

  public ngOnDestroy(): void {
    if (this.sharereplaySubscription)
      this.sharereplaySubscription.unsubscribe()
  }
}
