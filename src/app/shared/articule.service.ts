import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


import { IArticule } from './articules';

@Injectable({
    providedIn: 'root' // to register lower you change root to ./math-list.component.html and below
                       // prodivers: [ArticuleService]
})
export class ArticuleService {
    private articuleUrl =  'api/articules/articules.json';


    constructor(private http: HttpClient){}

    getArticules(): Observable <IArticule[]> {
        return this.http.get <IArticule[]>(this.articuleUrl)
            .pipe(
                tap(data=>console.log('All: '+JSON.stringify(data))),
                catchError(this.handleError)
            );
    } 

    getArticule(id: number): Observable<IArticule | undefined> {
        return this.getArticules()
            .pipe(
                map((articules: IArticule[])=> articules.find(a => a.Id ===id))
            );

    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

}