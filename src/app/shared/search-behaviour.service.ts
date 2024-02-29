import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBehavior {
  private searchBehaviourSubject = new BehaviorSubject<string>('');

  public get serachValue(): string {
    return this.searchBehaviourSubject.getValue();
  }

  public get serachBehviour$(): Observable<string> {
    return this.searchBehaviourSubject.asObservable();
  }

  public set serachValue(value: string) {
    this.searchBehaviourSubject.next(value ?? '');
  }
}
