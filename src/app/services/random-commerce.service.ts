import {Injectable} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {catchError, map} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { throwError } from 'rxjs/internal/observable/throwError';

import { RandomCommerce } from '../random-commerces/rancom-commerces.model';

@Injectable({
  providedIn: 'root',
})
export class RandomCommerceService {
    private baseUrl = 'https://random-data-api.com/api/v2/banks';
    private defaultSize = 100;

    constructor(private http: HttpClient) {
    }

    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        console.error('An error occurred:', error.error);
      } else {
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }

      return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    getRandomCommerces(size = this.defaultSize): Observable<RandomCommerce[]> {
        return this.http.get<RandomCommerce[]>(`${this.baseUrl}?size=${size}`)
          .pipe(
            map((data) => {
              return data
            }),
            catchError(this.handleError)
          );
    }
  }