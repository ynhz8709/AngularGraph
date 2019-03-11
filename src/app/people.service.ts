import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable, of ,} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { People } from './people';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Request Method': 'POST'}) 
};

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleUrl = 'http://localhost:8000/api';  // URL to web api
  peoples:any = [];

  constructor(private http: HttpClient) { }
    getPeople () {
      return this.http.get<People[]>( `${this.peopleUrl}/people/list`)      
      .pipe(
        // map(res=>res),
        catchError(this.handleError('getHeroes', []))
        );
    }

  /** POST: add a new hero to the server */
    addPeople (newpeople: People) {
      return this.http.post<People>(`${this.peopleUrl}/people/new`, JSON.stringify(newpeople)).pipe(
        map(res=>res),
        catchError(this.handleError<People>('addHero'))
      );
    }


    editPeople(people:People) {
      const pepleedit = new People;
      pepleedit.name=`${people.name}-${people.id}`;
      pepleedit.lastname=`${people.lastname}-${people.id}`;
      
        return this.http.put<People>(`${this.peopleUrl}/people/edit/${people.id}`, JSON.stringify(pepleedit))
        .pipe(
          map((res)=>res),
          catchError(this.handleError<People>('addHero'))
        );
      }


    deletePeople(id) {
        return this.http.delete(`${this.peopleUrl}/people/delete/${id}`).pipe(
          map(res=>res),
          catchError(this.handleError<People>('deleteHero'))
        );
      }

      /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
