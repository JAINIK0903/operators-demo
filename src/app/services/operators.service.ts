//Injectable
import { Injectable } from '@angular/core';

//HttpClient
import { HttpClient } from '@angular/common/http';

//rxjs Operators
import { Observable, concatMap, interval, mergeMap, of, shareReplay, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {
  public user: object[] = [{ name: 'Jainik', gender: 'Male' }, { name: 'Mohit', gender: 'Male' }, { name: 'Nirmit', gender: 'Male' }]
  public nameList: object[] = [{ 1: 'Jainik' }, { 2: 'Mohit' }, { 3: 'nirmit' }]
  public number!: number[]
  constructor(private http: HttpClient) { }
  public ofOperator(): Observable<object> {
    let string$ = of(this.nameList);
    return string$;
  }

  public ofOperatorWithList(): Observable<object> {
    let user$ = of(this.user);
    return user$;
  }

  public print(val: string, containerId: string): void {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }

  public concatMapWithAPI(): Observable<string> {
    const breed$ = of('hound', 'mastiff', 'retriever'); // outer/source observable
    const concatMapped$ = breed$.pipe(
      concatMap((breed) => {
        const url = 'https://dog.ceo/api/breed/' + breed + '/list';
        return this.http.get<any>(url); // inner observable
      })
    );
    return concatMapped$;
  }

  public mergeMap(): Observable<number> {

    const breed$ = of('hound', 'mastiff', 'retriever'); // outer/source observable
    const mergeMapped$ = breed$.pipe(
      mergeMap((breed) => {
        const url = 'https://dog.ceo/api/breed/' + breed + '/list';
        return this.http.get<any>(url); // inner observable
      })
    );
    return mergeMapped$;
  }

  public switchMap(): Observable<string> {
    const breed$ = of('hound', 'mastiff', 'retriever');
    const switchMapped$ = breed$.pipe(
      switchMap((breed) => {
        const url = 'https://dog.ceo/api/breed/' + breed + '/list';
        return this.http.get<any>(url);
      })
    );
    return switchMapped$;
  }

  public takeUntil(): Observable<number> {
    const source$ = interval(1000);
    return source$;
  }

  public getDogBreed(breed: string): Observable<string> {
    const url = 'https://dog.ceo/api/breed/' + breed + '/list';
    return this.http.get<any>(url);
  }

  public shareReply(): Observable<number> {
    // 3 is buffer size, which means it will cache the last 3 emitted values and replay them to new subscribers.
    const source$ = interval(2000).pipe(take(6), shareReplay(3));
    return source$;
  }

}