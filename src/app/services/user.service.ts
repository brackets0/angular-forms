import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { BehaviorSubject, Observable, filter, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users$ = new BehaviorSubject<User[]>([]);
  constructor(private http: HttpClient) { }

  init(): void {
    this.http.get<User[]>('http://localhost:5000/users')
      .pipe(tap(users => console.log(users)))
      .subscribe(users => this.users$.next(users));
  }

  // post()
  public create(user: User): Observable<User> {
    const users = this.users$.getValue();
    this.users$.next([...users, user]);
    return of(user);
  }

  public get(id: string): Observable<User> {
    return this.users$.pipe(
      map(users => users.find(user => user.id === id)),
      filter(Boolean),
    );
  }

  public getUsers$(): Observable<User[]> {
    return this.users$;
  }

  public getNewUsers$(): Observable<User[]> {
    return this.users$.pipe(
      map(users => users.filter(user => user.isNew))
    );
  }

  // update() // put()
  public update() { }

  // delete()
  public delete() { }

  // dosen't exist on CRUD
  public findAll(): Observable<User[]> {
    return this.users$;
  }
}
