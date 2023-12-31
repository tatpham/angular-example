// commerce.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { loadRandomCommerces, loadRandomCommercesFailure, loadRandomCommercesSuccess } from '../actions/random-commerces.actions';
import { RandomCommerceService } from 'src/app/services/random-commerce.service';
import { Action } from '@ngrx/store';

@Injectable()
export class CommerceEffects {
  constructor(private actions$: Actions, private commerceService: RandomCommerceService) {}

  loadCommerces$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRandomCommerces),
      switchMap(() =>
        this.commerceService.getRandomCommerces().pipe(
          map((commerces) => loadRandomCommercesSuccess({ commerces })),
          catchError((error) => of(loadRandomCommercesFailure({ error })))
        )
      )
    )
  );
}
